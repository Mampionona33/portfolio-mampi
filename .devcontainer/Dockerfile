# Utilisation d'une image de base stable
FROM node:lts-slim

# Mise à jour des paquets et installation des dépendances requises, y compris OpenSSH
RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    git \
    gnupg \
    lsb-release \
    openssh-client \
    bash-completion \
    && rm -rf /var/lib/apt/lists/*

# Ajout de la clé GPG pour Docker et configuration du dépôt Docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    | tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    && rm -rf /var/lib/apt/lists/*

# Installation de pnpm en tant que gestionnaire de paquets Node.js
RUN npm install -g pnpm

# Configuration globale de Git pour ajouter le répertoire de travail comme "safe"
RUN git config --global --add safe.directory /workspaces/portfolio-mampi

# Commande pour garder le conteneur actif
CMD ["sleep", "infinity"]
