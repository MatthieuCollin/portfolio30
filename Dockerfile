FROM node:22-alpine

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances dans le conteneur
RUN npm install

# Copier le reste du code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]