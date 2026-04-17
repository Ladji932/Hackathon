# 🚀 Hackathon – Solimouv' PWA

---

## 📌 Présentation du projet

Ce projet a été réalisé dans le cadre d’un hackathon autour de l’association **Up Sport!**, avec pour objectif de créer une **application web moderne (PWA)** permettant de promouvoir le festival **Solimouv'**.

L’application vise à améliorer :

* la visibilité du festival
* l’accessibilité des informations
* l’engagement des utilisateurs

👉 Elle est conçue pour être installable, rapide et accessible sur mobile et desktop.

---

## 🌐 Démo en ligne

🔗 https://hackathon-gamma-indol.vercel.app

---

## 🎯 Objectifs du projet

* Créer une Progressive Web App performante
* Centraliser toutes les informations du festival
* Proposer une expérience utilisateur fluide et intuitive
* Optimiser le référencement (SEO)
* Fournir une base technique évolutive

---

## 🧱 Stack technique

### Frontend

* React (Vite)
* JavaScript (ES6+)
* CSS (responsive design)
* PWA (manifest.json + service worker)

### Backend

* Node.js
* Express.js

### Base de données

* MongoDB
* Mongoose

### Autres outils

* Axios (requêtes HTTP)
* JWT (authentification)
* API Anthropic (chatbot)
* Vercel (frontend)
* Render / Railway (backend)

---

## 📁 Structure du projet

Hackathon/
│
├── backend/
│   ├── Controller/
│   ├── Model/
│   ├── Routes/
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── vite.config.js

---

## ⚙️ Installation du projet

### 1. Cloner le repository

```bash
git clone https://github.com/Ladji932/Hackathon.git
cd Hackathon
```

---

### 2. Installation du frontend

```bash
npm install
npm run dev
```

👉 Accessible sur : http://localhost:5173

---

### 3. Installation du backend

```bash
cd backend
npm install
npm run dev
```

👉 Accessible sur : http://localhost:5000

---

## 🔐 Variables d’environnement

Créer un fichier `.env` dans le dossier backend :

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
ANTHROPIC_API_KEY=your_api_key
```

⚠️ Ne jamais commit ce fichier.

---

## 📱 Fonctionnalités principales

### 🔹 PWA (Progressive Web App)

* Installable sur mobile et desktop
* Fonctionne offline partiellement
* Chargement rapide
* Responsive design

---

### 🔹 Pages principales

* Accueil
* À propos (Up Sport! + Solimouv')
* Programme
* Associations partenaires
* Contact

---

### 🔹 Authentification

* Inscription utilisateur
* Connexion sécurisée
* Gestion des sessions via JWT
* Routes protégées

---

### 🔹 Chatbot intelligent

* Interface conversationnelle
* Intégration API Anthropic
* Réponses adaptées au festival
* Support utilisateur automatisé

---

### 🔹 Quiz interactif

* Questions dynamiques
* Validation des réponses
* Résultats personnalisés
* Enregistrement en base de données

---

## 🔍 SEO & Performance

* Balises meta optimisées
* Structure HTML sémantique
* URLs propres
* Images optimisées
* Temps de chargement rapide

---

## 🎨 Design & UX

* Mobile-first design
* Interface intuitive
* Navigation fluide
* Identité visuelle cohérente
* Composants réutilisables

---

## 🚀 Déploiement

### Frontend

Déployé avec Vercel :

```bash
git push origin main
```

👉 Déploiement automatique

---

### Backend

À déployer sur :

* Render
* Railway

---

## 📊 Données manipulées

* Utilisateurs
* Quiz
* Résultats
* Messages chatbot

---

## 🔄 API Routes principales

* /api/auth
* /api/quiz
* /api/chatbot
* /api/users

---

## 📦 Livrables

* Application web fonctionnelle
* Code source GitHub
* Documentation technique
* Interface utilisateur complète

---

## 🧠 Choix techniques

* Vite pour la rapidité
* React pour la modularité
* MongoDB pour la flexibilité
* Express pour la simplicité backend

---

## 📈 Améliorations possibles

* Dashboard admin
* Notifications push
* Mode offline complet
* Analytics utilisateurs
* SEO avancé

---

## 👥 Équipe

* Ladji
* (ajouter les membres)

---

## 📄 Licence

Projet réalisé dans un cadre pédagogique.

---

## 💬 Conclusion

Ce projet répond aux exigences du socle minimal du hackathon avec :

* une PWA fonctionnelle
* une architecture complète
* une base évolutive

Il constitue une solution digitale moderne pour promouvoir efficacement le festival Solimouv'.

---
