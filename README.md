# Island Encounters

**Island Encounters** est un jeu de rencontre en ligne où chaque joueur peut créer et personnaliser sa propre île. Explore un monde vaste rempli d'îles créées par d'autres joueurs, interagis avec eux, et construis ta propre utopie.

## Fonctionnalités

- **Création d'île** : Personnalise et décore ton île avec divers objets et structures.
- **Exploration** : Navigue sur la mer infinie et visite les îles d'autres joueurs.
- **Interaction sociale** : Rencontre d'autres joueurs, chattez en temps réel, et échangez des idées de décoration.
- **Graphismes en 3D** : Profite d'une vue de haut immersive rendue avec WebGL.
- **En temps réel** : Grâce à WebSocket, toutes les interactions et les mises à jour se font en temps réel.

## Technologies utilisées

- **Front-end** : HTML5, CSS3, JavaScript, Three.js
- **Back-end** : Node.js, WebSocket
- **Base de données** : MongoDB
- **Graphismes** : WebGL via Three.js

## Prérequis

- Node.js
- MongoDB

## Installation

1. Clone le repository :

   ```bash
   git clone https://github.com/ton_nom_d_utilisateur/island-encounters.git
   cd island-encounters```
2. Installe les dépendances pour le serveur :
    ```bash
    cd server
    npm install
    ```
3. Lance MongoDB :
  ```bash
   mongod
```

4. Configure les variables d'environnement (si nécessaire) :

##Crée un fichier .env dans le dossier server et ajoute les configurations nécessaires, par exemple :

```bash
DB_URL=mongodb://localhost:27017/islands
PORT=8080
```
5. Démarre le serveur :
```bash
npm start
```
6. Ouvre le dossier client et lance un serveur local pour le front-end :
```bash
  cd ../client
  npx live-server
```

## Utilisation
-Ouvre ton navigateur et accède à http://localhost:8080.
- Inscris-toi ou connecte-toi.
- Commence à créer et personnaliser ton île.
- Explore et interagis avec d'autres joueurs dans le monde.
## Contributions
### Les contributions sont les bienvenues ! Pour contribuer :

- Fork le repository.
- Crée une branche pour ta fonctionnalité (git checkout -b nouvelle-fonctionnalité).
- Commit tes modifications (git commit -m 'Ajoute une nouvelle fonctionnalité').
- Pousse ta branche (git push origin nouvelle-fonctionnalité).
- Ouvre une Pull Request.
