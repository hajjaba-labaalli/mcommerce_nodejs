# Utilisation une balise d'image de base Docker explicite et déterministe et minimaliste (Best practice 1)
FROM node:20-alpine
# L'installation de l'outil dumb-init
# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# Optimisation des outils pour la produciton (Best practice 3)
ENV NODE_ENV=production
# Définition du répértoire de travail
WORKDIR /app
# copiant les fichiers package.json et package-lock.json dans le répertoire de travait
COPY ["package.json", "package-lock.json", "./"]
# Installation des dépendences de la production seulementcopiez les fichiers package.json et package-lock.json* dans le répertoire de travai
RUN npm ci --only=production
# Exécution des conteneurs en tant que user non privilégié (node) non pas en tant que root
USER node
COPY . .
# Définition du port sur lequel le conteneur écoute
EXPOSE 5000
# Utilisation de l'outil dumb-init en tant qu'un processus principal
CMD ["node", "server.js"]
