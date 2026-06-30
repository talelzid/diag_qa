# Diagnostic Employabilité — AEC QA

Outil de diagnostic d'employabilité personnalisé pour les candidats de la formation **AEC Spécialiste en qualité logicielle**. Propulsé par l'API Google Gemini.

## Fonctionnalités

- Formulaire d'audit initial (profil LinkedIn, auto-évaluation technique, mises en situation)
- Analyse de CV par référentiel QA (38+ compétences clés du marché québécois)
- Entrevue virtuelle générée par IA — 3 questions ciblées sur les lacunes détectées
- Diagnostic complet : scores par pilier, points critiques, plan d'action priorisé
- Analyse de l'URL LinkedIn (personnalisée vs. identifiant aléatoire)
- Export Markdown du rapport complet

## Déploiement sur GitHub Pages

La clé API est injectée via un **GitHub Secret** au moment du déploiement — elle n'est jamais dans le code source ni dans l'historique Git.

### Configuration initiale (une seule fois)

**1. Ajouter le Secret GitHub**

Dans votre dépôt : **Settings → Secrets and variables → Actions → New repository secret**

| Nom | Valeur |
|---|---|
| `GEMINI_API_KEY` | Votre clé API Gemini ([Google AI Studio](https://aistudio.google.com) → *Get API key*) |

**2. Activer GitHub Pages avec GitHub Actions**

Dans **Settings → Pages** : choisir **Source = GitHub Actions** (et non une branche).

**3. Déployer**

Pousser un commit sur `main` — le workflow `.github/workflows/deploy.yml` génère automatiquement `config.js` avec la clé et déploie.

L'application est disponible à `https://[votre-compte].github.io/[nom-du-dépôt]/`

> Les étudiants ouvrent simplement l'URL — aucune saisie de clé requise de leur côté.

## Développement local

```bash
# 1. Créez config.js avec votre clé API (ce fichier est gitignorée)
echo "const GEMINI_API_KEY = 'votre-cle-ici';" > config.js

# 2. Ouvrez index.html dans votre navigateur
#    (ou lancez un serveur local, ex. : npx serve .)
```

La présence de `config.js` court-circuite la fenêtre de saisie de clé — pratique pour le développement.

## Structure du projet

```
index.html              # Application SPA complète (HTML + CSS + JS)
skills_dictionary.js    # Référentiel des 38+ compétences QA (poids, mots-clés, piliers)
config.js               # Clé API locale — gitignorée, jamais commitée
spec_diag_qa.md         # Spécification fonctionnelle du projet
README.md               # Ce fichier
```

## Stack technique

- HTML / CSS / JavaScript vanilla — aucune dépendance, aucun build
- Google Gemini API (`gemini-2.5-flash`)
- Google Fonts — Inter

---
*Les Mercredis QA & IA — Formation AEC Spécialiste en qualité logicielle*
