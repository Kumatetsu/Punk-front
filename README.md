# Punk-front

Application de test https://bitbucket.org/maecia/dev-front-test/src/master/

## Installation
```
git clone https://github.com/Kumatetsu/Punk-front.git
cd Punk-front
npm install
```

## Lancer l'application
```
npm run dev
```

## Lancer les tests unitaires
```
npm run test:unit
```

## Réalisation de l'exercice

### Étape 1
- Récupérez et affichez la liste des 20 premières bières ✔️
- Deux affichages doivent être possibles : liste et grid
  - Seul un affichage basique de liste a été réalisé
- Ajouter une pagination pour accéder aux bières suivantes ✔️
- Gérer le responsive afin que le site soit présentable sur mobile. 🔴
### Étape 2
- Ajouter un champ de recherche ✔️
- Au clic sur une bière, ouvrir une page avec les informations de celle-ci ✔️

### Étape 3 🔴

## Choix techniques

### Architecture
Pour l'exercice j'ai décidé de partir sur une clean architecture front, cela a eu ses avantages et ses inconvénients mais c'était plus le challenge de la réalisation qui m'a interressé qu'une choix vraiment optimisé pour un exercice de test technique.
- **Presentation**: Contient les view et les components, cette partie ne contient presque pas de logique elle fait principalement appel aux adapters pour gérer son state
- **Application**: Logique propre à une application vue, les adapters spécifiques pour lister des bières et le router vue
- **Domain**:
  - 2 useCases, un pour lister les bière et un pour gérer une seule bière
  - Entity (0 car l'entité est externe et se retrouve donc dans la partie infrastructure)
  - Di gestion des dépendance
  - ports : gestion des entités et des fonctionnements des services dans l'infrastructure
  - adapters: gestion générique de state.
- **Infrastructure**:
  - Http: gestion lib externes
  - Stubs: classes d'in memory testing pour le client http

### Résolution des problématiques techniques:
L'utilisation de la clean avec un state fait maison m'a un peu orienté pour les différentes problématiques.
Pour la gestion du filtre par exemple, je n'ai pas pu utiliser les computed directement dans les views, j'ai du passer directement par un système de filtre dans mon adapters + une copie de lecture afin de ne pas avoir à refaire des fetchs à chaque modification.

Pour une gestion plus simple j'aurais pu simplement coder mes logiques dans les components ce qui demande un peu moins de réflexion sur l'organisation des événements (computed pour la liste, beforeRouteUpdate pour récupérer la bière selectionnée etc etc)

Cependant la clean m'a permis de mettre en place toute la logique de base en faisant du TDD et en ne faisant que des tests unitaires et d'intégration. Les components n'ont qu'une chose à faire, s'instancier et récupérer les données depuis les adapters. Une zone qui m'a manqué est comment profiter de chacuns des lifecycle hooks de vue. Il est possible de les utiliser dans les adapters mais je n'ai pas eu le temps de pousser la recherche un peu plus loin.

### Le front
Pour le coup le front n'est pas du tout développé, n'ayant pas fait de css depuis un moment, j'ai fait le stric minimum afin d'avoir un rendu.
Je suis conscient que ce n'est pas très beau, et je n'ai pas touché le css proposé par vue à l'init du projet donc c'est assez sombre. Mais il me semblait plus interessant de proposer les fonctionnalités et la reflexion autour.
