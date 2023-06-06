#best practice 1 : Utilisation de plusieurs étapes de construction (build & production)

# phase 1
#best practice 2: Utilisation de balises d'image explicites
FROM node:20-alpine as builder
#best practice 3: Définition du répertoire de travail "WORKDIR"  pour maintenir une structure claire.
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

# phase 2
#best practice 4 : Utilisation de balises d'image explicites
FROM nginx:1.23.2-alpine as production
#best practice 5: Définition de l'environnement NODE_ENV sur "production" pour optimiser les outils et les performances de l'application.
ENV NODE_ENV production
#best practice 6: Copier uniquement les fichiers nécessaires de la phase de construction vers la phase de production.
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]