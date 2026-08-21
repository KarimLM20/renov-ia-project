import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MESSAGES = [
  "Analyse de votre pièce...",
  "Compréhension des volumes...",
  "Création du design...",
  "Application des matériaux...",
  "Finalisation...",
];

const MESSAGE_DURATION = 3000;
const PROGRESS_INTERVAL = 50;
const TOTAL_DURATION = MESSAGES.length * MESSAGE_DURATION;
const PROGRESS_INCREMENT = 100 / (TOTAL_DURATION / PROGRESS_INTERVAL);

/** Écran de génération IA « Stitch » — shader animé, carrousel de messages et barre de progression. */
export function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Shader WebGL animé dans le canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    function syncSize() {
      const w = canvas.clientWidth || 256;
      const h = canvas.clientHeight || 256;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncSize) : null;
    ro?.observe(canvas);
    syncSize();

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;

      void main() {
        vec2 uv = v_texCoord;
        float time = u_time * 0.5;

        vec3 offWhite = vec3(0.98, 0.97, 0.96);
        vec3 sage = vec3(0.56, 0.62, 0.51);
        vec3 terracotta = vec3(0.74, 0.45, 0.33);
        vec3 sand = vec3(0.91, 0.84, 0.76);

        float n1 = sin(uv.x * 2.0 + time) * cos(uv.y * 1.5 - time) * 0.5 + 0.5;
        float n2 = sin(uv.y * 2.5 - time * 0.7) * cos(uv.x * 2.0 + time * 0.6) * 0.5 + 0.5;
        float n3 = sin((uv.x + uv.y) * 1.5 + time * 1.1) * 0.5 + 0.5;

        vec3 color = mix(offWhite, sage, n1 * 0.6);
        color = mix(color, terracotta, n2 * 0.45);
        color = mix(color, sand, n3 * 0.2);

        float dist = distance(uv, vec2(0.5));
        float pulse = sin(u_time * 1.5) * 0.05 + 0.95;
        float fade = smoothstep(0.6 * pulse, 0.2, dist);
        color = mix(offWhite, color, fade);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compile(type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compile(gl.VERTEX_SHADER, vertexSource);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");

    let raf = 0;
    let start = performance.now();
    let running = true;

    function render(now: number) {
      if (!running) return;
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) * 0.001);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  // Carrousel de messages.
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, MESSAGE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Barre de progression.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + PROGRESS_INCREMENT, 100));
    }, PROGRESS_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-margin-mobile text-center">
      <div className="relative mb-12 flex h-64 w-64 items-center justify-center overflow-hidden rounded-xl bg-surface-m3/50 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md md:h-80 md:w-80">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full"
        />
      </div>

      <div className="relative mb-8 flex h-12 w-full max-w-md flex-col items-center justify-center overflow-hidden">
        {MESSAGES.map((msg, index) => {
          const offset = index - messageIndex;
          const isVisible = offset === 0;
          const isBelow = offset === 1 || offset === -(MESSAGES.length - 1);
          const isAbove = offset === -1 || offset === MESSAGES.length - 1;

          return (
            <div
              key={msg}
              className={cn(
                "absolute w-full text-center font-body text-body-lg text-on-surface-variant transition-all duration-700 ease-in-out",
                isVisible && "translate-y-0 opacity-100",
                isBelow && "translate-y-6 opacity-0",
                isAbove && "-translate-y-6 opacity-0",
                !isVisible && !isBelow && !isAbove && "translate-y-6 opacity-0",
              )}
            >
              {msg}
            </div>
          );
        })}
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-surface-variant">
        <div
          className="h-full rounded-full bg-tertiary-m3 transition-all duration-75 ease-linear"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
