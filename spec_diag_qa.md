# Cahier des Charges & Spécifications : SaaS de Diagnostic d'Employabilité QA (IA-Driven)

## 1. Architecture de l'Agent IA & Intelligence Applicative

L'utilisation d'un grand modèle de langage (LLM) configuré en Agent nécessite un encadrement strict pour éviter les hallucinations et garantir la pertinence du diagnostic.

* **Mode de fonctionnement (Dual-Pass) :**
1. **Phase d'Analyse et Relance :** L'agent prend connaissance des réponses initiales (textes libres, profils textuels) et génère au maximum **2 à 3 questions de forage** hautement ciblées si une ambiguïté ou une faiblesse est détectée.
2. **Phase de Synthèse (Structured Output) :** Une fois le dialogue clos, l'agent compile les données et utilise le *Function Calling* (ou JSON Mode) pour renvoyer un objet structuré à l'application.


* **Prompt Engineering & Rôle :** L'Agent est configuré comme un **Recruteur Senior et Mentor en Assurance Qualité Logicielle au Québec**. Il évalue selon les standards du marché local (rigueur technique, autonomie, culture méthodologique).

---

## 2. Périmètre Évaluatif (Les Modules d'Audit)

Le diagnostic s'articule autour de 4 piliers fondamentaux de la formation AEC (13 mois) :

### A. Visibilité & Outils de Recherche

* **CV & LinkedIn :** Analyse textuelle de la description du profil, structure des expériences, présence des mots-clés essentiels (Automatisation, CI/CD, ISTQB, types de tests).
* **Stratégie de marché :** Évaluation de la connaissance des plateformes locales et de la démarche réseau.

### B. Compétences Techniques (Hard Skills)

* **Tests Manuels & Méthodologie :** Conception de plans de tests, gestion des anomalies, maîtrise des techniques de boîtier noir (conception combinatoire, partitions d'équivalence).
* **Automatisation & Architecture :** Compréhension des frameworks de tests, robustesse de la stratégie de localisation (sélecteurs stables), utilisation des patrons de conception (ex. *Page Object Model*).
* **Écosystème & CI/CD :** Conteneurisation (Docker), intégration continue, outils de gestion du cycle de vie (ALM).

### C. Posture Professionnelle (Soft Skills & Mises en situation)

* **Communication :** Clarté et précision lors de la description d'un bogue complexe.
* **Collaboration :** Posture face à un développeur qui conteste un bogue ou face à un changement de priorité de dernière minute.

---

## 3. Flux Fonctionnel Détaillé (User Flow)

```
[Inscription Étudiant]
         │
         ▼
[Étape 1 : Formulaire Initial] ── (Données brutes, liens, auto-évaluation)
         │
         ▼
[Étape 2 : Analyse par l'Agent IA]
         │
 ┌───────┴───────┐
 │ Faiblesses ?  │ ──► [Oui] ──► [Génération de 2-3 questions de forage]
 └───────┬───────┘                      │
         │ [Non / Répondu] <────────────┘
         ▼
[Étape 3 : Consolidation Finale]
         │
         ▼
[Étape 4 : Génération du Diagnostic Complet]

```

### Description des étapes :

1. **Formulaire initial :** L'étudiant saisit ses informations de base, colle son profil LinkedIn / CV textuel, et répond à une mise en situation technique ouverte.
2. **Analyse en arrière-plan :** L'Agent IA analyse la cohérence entre l'auto-évaluation et le texte libre.
3. **Forage dynamique :** L'interface affiche une section personnalisée : *"Pour préciser votre profil, le coach IA a relevé 2 points à clarifier avec vous..."*.
4. **Clôture :** L'étudiant répond, déclenchant la génération du rapport final.


MISE A JOUR DU FLUX FONCTIONNEL (USER FLOW)

ETAPE 1 : FORMULAIRE INITIAL
L'étudiant saisit ses informations de base, ses liens (LinkedIn, CV), et remplit les champs de texte libre concernant les mises en situation techniques et comportementales.

ETAPE 2 : ANALYSE ET GENERATION SYSTEMATIQUE DES QUESTIONS
L'Agent IA réceptionne les données. Son mandat n'est plus de décider s'il faut relancer, mais de construire systématiquement 2 à 3 questions d'entrevue personnalisées basées sur les failles ou les non-dits du formulaire. Par exemple, si l'étudiant décrit une stratégie de test fonctionnel classique, l'IA générera une question le forçant à expliquer comment il optimiserait la couverture via des méthodes de tests combinatoires (Pairwise) ou l'utilisation de l'outil PICT, éléments cruciaux pour valider la profondeur de ses compétences.

ETAPE 3 : L'ENTREVUE VIRTUELLE (LE FORAGE OBLIGATOIRE)
L'interface se met à jour et affiche l'intervention du coach IA. L'étudiant est informé que le profil a été pré-analysé, mais qu'il doit impérativement répondre à ces questions spécifiques d'approfondissement pour démontrer sa réelle maîtrise technique et sa capacité d'adaptation face à un problème inattendu.

ETAPE 4 : CONSOLIDATION ET DIAGNOSTIC FINAL
Une fois les réponses de l'entrevue soumises, l'IA compile l'ensemble de l'échange (données initiales plus les réponses aux relances) pour générer l'objet structuré final contenant le score de préparation, les éléments critiques à corriger et le plan d'action priorisé.

Cette approche garantit que chaque étudiant subira un test de robustesse de ses connaissances. Le rapport final généré sera ainsi infiniment plus précis et pertinent pour l'accompagner dans sa recherche de stage ou d'emploi.
---

## 4. Modèle de Données du Diagnostic (Sortie JSON de l'IA)

L'IA doit impérativement retourner les données sous ce format strict pour permettre l'affichage dynamique dans le tableau de bord :

```json
{
  "readiness_score": 72,
  "pillars": {
    "visibility": { "score": 60, "summary": "Texte de synthèse..." },
    "hard_skills": { "score": 85, "summary": "Texte de synthèse..." },
    "soft_skills": { "score": 70, "summary": "Texte de synthèse..." }
  },
  "red_flags": [
    "Absence de mention des frameworks d'automatisation sur le profil LinkedIn.",
    "Explication trop vague de la gestion d'un conflit technique."
  ],
  "action_plan": [
    { "priority": "Haute", "task": "Ajouter les mots-clés POM et Docker dans le titre ou résumé LinkedIn." },
    { "priority": "Moyenne", "task": "Pratiquer la description de bogue selon la structure : Attendu / Obtenu / Étapes." }
  ]
}

```

---

## 5. Spécifications Techniques & Environnement

* **Architecture :** Application Web Monopage (SPA) ou framework SSR léger.
* **Intégration IA :** Connexion via API (OpenAI/Anthropic) en utilisant le *Streaming* pour l'affichage fluide des questions de forage.
* **Infrastructure & Déploiement :** * Conteneurisation complète via **Docker** (Dockerfile et docker-compose) pour garantir un environnement iso-production entre le développement et le serveur d'hébergement.
* **Sécurité des données :** Anonymisation ou protection des données personnelles des étudiants (CV, noms, courriels) envoyées aux API tierces selon les directives de confidentialité.

### 5.1 Architecture de Déploiement Découplée (V1 - Serverless Proxy)

Pour concilier la gratuité de l'infrastructure lors de cette phase de lancement et l'exigence absolue de sécurité (protection des clés d'API), le projet adopte une architecture découplée et serverless :

* **Hébergement Frontend (Interface Utilisateur) :** La couche de présentation (HTML/JS statique ou SPA) est hébergée sur **GitHub Pages**. Cela offre un hébergement agile, gratuit, et nativement connecté aux flux de déploiement continu (GitHub Actions) de l'équipe de développement.
* **Passerelle Backend Sécurisée (Serverless Function) :** Les appels vers l'Agent IA ne se font pas directement depuis le navigateur de l'étudiant. Ils transitent par une micro-fonction *Serverless* intermédiaire hébergée sur une plateforme tierce gratuite (ex. **Vercel Functions**, **Netlify Functions** ou **Cloudflare Workers**).
* **Isolation et Gestion des Secrets :** La clé d'API privée du fournisseur de LLM (OpenAI/Anthropic) est injectée uniquement au niveau de cette fonction Serverless via des variables d'environnement sécurisées. Le frontend envoie les réponses de l'étudiant à la fonction Serverless, celle-ci valide la requête, y greffe la clé d'API cachée, interroge l'Agent IA, et retourne le flux de réponse au client hébergé sur GitHub Pages. 

Cette approche garantit l'anonymat complet des identifiants de production face à l'inspecteur du navigateur client, tout en maintenant un coût d'exploitation nul pour la phase pilote.
---

## 6. Stratégie d'Assurance Qualité (Testabilité native)

Un outil conçu par et pour la QA se doit d'être un modèle d'ingénierie de test.

* **Testabilité de l'Interface (E2E) :** * Interdiction d'utiliser des sélecteurs CSS basés sur la structure dynamique (ex. `div > p > button`).
* **Obligation stricte** d'ajouter des attributs dédiés aux tests : `data-cy="input-linkedin-url"`, `data-testid="submit-initial-form"`, `data-cy="ai-question-container"`.


* **Validation de l'Agent IA :**
* Implémentation de tests de non-régression sur les prompts (Vérifier qu'une modification du prompt principal ne dégrade pas la structure JSON attendue en sortie).
* Définition de cas de tests "témoins" (ex. un profil d'étudiant excellent, un profil très faible) pour valider la cohérence des scores générés par l'IA au fil des versions.

---
## 7. Formulaire initial

