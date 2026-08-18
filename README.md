# RENOV IA: Your Dream Space

Agis comme un développeur senior React, un UX Designer senior et un Product Designer. Construis une application web premium nommée RENOV IA en suivant strictement ce cahier des charges. Privilégie un code propre, modulaire et évolutif. L'objectif est d'obtenir un rendu professionnel proche d'une application SaaS moderne, avec une excellente expérience utilisateur, des animations fluides, un design haut de gamme et une architecture prête à accueillir de futures fonctionnalités. Ne développe que cette première fonctionnalité "Avant / Après" et prépare le projet pour les évolutions futures.         Cahier des charges – MVP 1 : RENOV IA – Fonctionnalité Avant / Après

Présentation

Créer une application web responsive appelée RENOV IA.

L'objectif de cette première version est simple :

L'utilisateur importe une photo de son intérieur (salon, cuisine, chambre, salle de bain, bureau...).

Grâce à l'intelligence artificielle, l'application génère une nouvelle version de cette pièce selon un style choisi.

Le résultat est affiché sous forme d'un comparateur Avant / Après avec un curseur horizontal.

Cette première version ne comporte ni catalogue produits, ni budget, ni financement.

Le seul objectif est d'obtenir une expérience utilisateur fluide et premium.

Identité graphique

L'application doit avoir un design premium.

Style :

 moderne

 minimaliste

 chaleureux

 élégant

 inspiré du design Apple

 animations fluides

Palette :

 blanc

 beige

 terracotta

 gris clair

 vert sauge (léger)

Coins arrondis.

Grandes cartes.

Peu de texte.

Icônes modernes.

Animations douces.

Page d'accueil

La page d'accueil contient :

Hero

Titre

Transformez votre intérieur grâce à l'IA

Sous-titre

Importez une photo et découvrez votre future décoration en quelques secondes.

Deux boutons

Importer une photo

ou

Prendre une photo

Sous les boutons

 Résultat instantané

 Plus de 30 styles

 Haute qualité

 Gratuit

Upload

L'utilisateur peut :

 glisser une image

 cliquer pour importer

 utiliser l'appareil photo sur mobile

Formats :

JPEG

PNG

WEBP

Taille maximale :

15 Mo

Aperçu

Après l'import :

Afficher la photo.

Bouton

Continuer

Choix de la pièce

L'utilisateur choisit :

Salon

Cuisine

Chambre

Salle de bain

Bureau

Salle à manger

Entrée

Autre

Chaque choix possède une belle illustration.

Choix du style

Afficher des cartes.

Chaque carte possède une image.

Styles :

Moderne

Scandinave

Industriel

Minimaliste

Japandi

Contemporain

Bohème

Classique

Rustique

Luxury

Chaque carte est sélectionnable.

Génération IA

Lorsque l'utilisateur clique sur

"Générer"

Afficher une animation.

Progression :

Analyse de votre pièce...

Création du design...

Application du style...

Finalisation...

Temps simulé :

5 à 10 secondes.

Résultat

Afficher :

Comparateur Avant / Après.

Le comparateur possède :

photo originale

photo générée

curseur central

L'utilisateur peut déplacer le curseur.

Le résultat doit être fluide.

Boutons

Sous le résultat :

Télécharger

Partager

Nouvelle génération

Changer de style

Responsive

L'application fonctionne parfaitement sur :

Desktop

Tablette

Mobile

Le comparateur doit rester parfaitement utilisable.

Animations

Toutes les transitions doivent être fluides.

Fade

Slide

Zoom léger

Aucune animation brutale.

Technologies

Frontend

React

TypeScript

Vite

TailwindCSS

Backend

Supabase

Stockage

Supabase Storage

Authentification

Aucune

Cette première version est accessible sans compte.

IA

Prévoir une architecture permettant facilement de connecter ultérieurement un fournisseur d'IA (OpenAI Images, Gemini, Flux, Stable Diffusion, etc.), mais utiliser pour l'instant des images de démonstration ou des emplacements ("mock") afin de construire l'interface sans dépendre immédiatement d'une API d'images.

Structure souhaitée

Accueil

↓

Upload

↓

Choix de la pièce

↓

Choix du style

↓

Génération

↓

Avant / Après

↓

Téléchargement

Contraintes

Le code doit être :

 propre

 modulaire

 maintenable

 réutilisable

 commenté

 conforme aux bonnes pratiques React

Créer des composants réutilisables pour :

 Header

 Hero

 Upload

 RoomSelector

 StyleSelector

 LoadingScreen

 BeforeAfterSlider

 Footer

Expérience utilisateur

L'utilisateur doit avoir l'impression d'utiliser une application haut de gamme.

L'interface doit être très visuelle.

Le parcours doit être réalisable en moins d'une minute.

L'utilisateur ne doit jamais se sentir perdu.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://renov-ia-project.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7e8b0b4d-29ff-43c8-a7c1-ce5ef60d27e9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
