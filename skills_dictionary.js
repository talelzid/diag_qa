// ─────────────────────────────────────────────────────────────────────────────
// Dictionnaire de référence des compétences QA
// Marché cible : Québec — Formation AEC QA (13 mois)
// ─────────────────────────────────────────────────────────────────────────────
// Pour ajouter une compétence, copier ce bloc et l'ajouter à la liste :
//
// {
//   id:       "identifiant_unique",            // snake_case, sans espaces ni accents
//   label:    "Nom affiché de la compétence",  // texte libre
//   keywords: ["terme1", "terme2", "term3"],   // termes cherchés dans le CV (insensible à la casse)
//   pillar:   "hard_skills",                   // "hard_skills" | "visibility" | "soft_skills"
//   category: "Catégorie thématique",          // regroupement libre pour affichage futur
//   weight:   "haute",                         // "haute" | "moyenne" | "faible"
// },
//
// ─────────────────────────────────────────────────────────────────────────────

const QA_SKILLS_DICTIONARY = [

  // ── VISIBILITÉ ───────────────────────────────────────────────────────────────

  {
    id:       "istqb_ctfl",
    label:    "Certification ISTQB CTFL",
    keywords: ["istqb", "ctfl", "certified tester", "foundation level"],
    pillar:   "visibility",
    category: "Certifications",
    weight:   "haute",
  },
  {
    id:       "istqb_ctal",
    label:    "Certification ISTQB CTAL (niveau avancé)",
    keywords: ["ctal", "istqb avancé", "advanced level", "test analyst", "technical test analyst"],
    pillar:   "visibility",
    category: "Certifications",
    weight:   "faible",
  },


  // ── HARD SKILLS — Tests Manuels & Méthodologie ───────────────────────────────

  {
    id:       "plan_de_tests",
    label:    "Plan de tests",
    keywords: ["plan de tests", "plan de test", "test plan", "stratégie de test", "test strategy"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
  {
    id:       "cas_de_tests",
    label:    "Cas de tests / Scénarios de test",
    keywords: ["cas de tests", "cas de test", "test case", "scénario de test", "test scenario"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
  {
    id:       "rapport_de_bogues",
    label:    "Rapport de bogues / Gestion des anomalies",
    keywords: ["rapport de bogue", "rapport d'anomalie", "bug report", "defect report", "anomalie", "defect management"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
  {
    id:       "boite_noire",
    label:    "Tests boîte noire",
    keywords: ["boîte noire", "boite noire", "black box", "black-box"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
  {
    id:       "partitions_equivalence",
    label:    "Partitions d'équivalence",
    keywords: ["partition d'équivalence", "partitions d'équivalence", "equivalence partition", "classe d'équivalence"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
  {
    id:       "valeurs_limites",
    label:    "Analyse des valeurs limites",
    keywords: ["valeur limite", "valeurs limites", "boundary value", "bva"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
  {
    id:       "pairwise_pict",
    label:    "Tests combinatoires (Pairwise / PICT)",
    keywords: ["pairwise", "pict", "combinatoire", "combinatorial", "test combinatoire"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
  {
    id:       "tests_regression",
    label:    "Tests de régression",
    keywords: ["régression", "regression", "test de régression", "suite de régression"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
  {
    id:       "tests_fumee",
    label:    "Tests de fumée / Smoke tests",
    keywords: ["smoke test", "smoke testing", "test de fumée", "sanity check"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "faible",
  },
    {
    id:       "tests_transition",
    label:    "Tests de transition d'états",
    keywords: ["transition d'états", "state transition", "state transition testing"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
    {
    id:       "decision_table",
    label:    "Table de décision",
    keywords: ["table de décision", "decision table", "decision-making table"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
    {
    id:       "BPMN",
    label:    "BPMN",
    keywords: ["bpmn", "business process model and notation", "process modeling"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "haute",
  },
    {
    id:       "uml_diagrammes",
    label:    "Diagrammes UML",
    keywords: ["uml", "diagramme uml", "use case", "class diagram", "sequence diagram"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "moyenne",
  },
    {
    id:       "TMMI",
    label:    "TMMI",
    keywords: ["tmmi", "test maturity model integration", "test process improvement"],
    pillar:   "hard_skills",
    category: "Tests manuels",
    weight:   "faible",
  },

  // ── HARD SKILLS — Automatisation Web ─────────────────────────────────────────

  {
    id:       "selenium",
    label:    "Selenium WebDriver",
    keywords: ["selenium", "webdriver", "selenium webdriver"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "haute",
  },
  {
    id:       "robot_framework",
    label:    "Robot Framework",
    keywords: ["robot framework", "robotframework", "robot fw"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "haute",
  },
  {
    id:       "playwright",
    label:    "Playwright",
    keywords: ["playwright"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "moyenne",
  },
  {
    id:       "cypress",
    label:    "Cypress",
    keywords: ["cypress"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "moyenne",
  },
  {
    id:       "pom",
    label:    "Page Object Model (POM)",
    keywords: ["page object model", "pom", "page object"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "haute",
  },
  {
    id:       "cucumber_gherkin",
    label:    "Cucumber / Gherkin / BDD",
    keywords: ["cucumber", "gherkin", "bdd", "behaviour driven", "behavior driven", "driven development"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "moyenne",
  },
  {
    id:       "selecteurs_stables",
    label:    "Sélecteurs stables (data-cy / data-testid)",
    keywords: ["data-cy", "data-testid", "sélecteur stable", "selecteur stable", "locator", "xpath"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "haute",
  },
  {
    id:       "python",
    label:    "Python",
    keywords: ["python", "python programming", "python language"],
    pillar:   "hard_skills",
    category: "Automatisation Web",
    weight:   "haute",
  },

  // ── HARD SKILLS — Tests API ───────────────────────────────────────────────────

  {
    id:       "postman",
    label:    "Postman",
    keywords: ["postman"],
    pillar:   "hard_skills",
    category: "Tests API",
    weight:   "haute",
  },
  {
    id:       "rest_api",
    label:    "Tests d'API REST",
    keywords: ["api rest", "rest api", "api testing", "test d'api", "tests d'api", "restful"],
    pillar:   "hard_skills",
    category: "Tests API",
    weight:   "haute",
  },
  {
    id:       "swagger",
    label:    "Swagger / OpenAPI",
    keywords: ["swagger", "openapi", "open api"],
    pillar:   "hard_skills",
    category: "Tests API",
    weight:   "moyenne",
  },
  {
    id:       "newman",
    label:    "Newman (Postman CLI)",
    keywords: ["newman"],
    pillar:   "hard_skills",
    category: "Tests API",
    weight:   "faible",
  },
  {
    id:       "jmeter",
    label:    "JMeter (tests de performance)",
    keywords: ["jmeter", "j-meter", "apache jmeter", "test de performance", "performance testing", "test de charge", "load testing"],
    pillar:   "hard_skills",
    category: "Tests API",
    weight:   "moyenne",
  },
  {
    id:       "xray",
    label:    "Xray (gestion de tests Jira)",
    keywords: ["xray", "xray test", "jira xray"],
    pillar:   "hard_skills",
    category: "Gestion de projet",
    weight:   "haute",
  },


  // ── HARD SKILLS — CI/CD & Infrastructure ─────────────────────────────────────

  {
    id:       "docker",
    label:    "Docker / Conteneurisation",
    keywords: ["docker", "conteneur", "container", "dockerfile", "docker-compose", "docker compose"],
    pillar:   "hard_skills",
    category: "CI/CD & Infrastructure",
    weight:   "haute",
  },
  {
    id:       "github_actions",
    label:    "GitHub Actions",
    keywords: ["github actions", "github action"],
    pillar:   "hard_skills",
    category: "CI/CD & Infrastructure",
    weight:   "haute",
  },
  {
    id:       "jenkins",
    label:    "Jenkins",
    keywords: ["jenkins"],
    pillar:   "hard_skills",
    category: "CI/CD & Infrastructure",
    weight:   "moyenne",
  },
  {
    id:       "gitlab_ci",
    label:    "GitLab CI/CD",
    keywords: ["gitlab ci", "gitlab cd", "gitlab pipeline"],
    pillar:   "hard_skills",
    category: "CI/CD & Infrastructure",
    weight:   "moyenne",
  },
  {
    id:       "git",
    label:    "Git / Contrôle de version",
    keywords: ["git", "github", "gitlab", "bitbucket", "contrôle de version", "version control"],
    pillar:   "hard_skills",
    category: "CI/CD & Infrastructure",
    weight:   "haute",
  },


  // ── HARD SKILLS — Qualité du code ─────────────────────────────────────────────

  {
    id:       "sonarqube",
    label:    "SonarQube / Analyse statique",
    keywords: ["sonarqube", "sonar", "analyse statique", "static analysis", "code quality"],
    pillar:   "hard_skills",
    category: "Qualité du code",
    weight:   "moyenne",
  },
  {
    id:       "code_review",
    label:    "Revue de code",
    keywords: ["revue de code", "code review", "peer review", "inspection de code"],
    pillar:   "hard_skills",
    category: "Qualité du code",
    weight:   "faible",
  },


  // ── HARD SKILLS — Gestion de projet & ALM ─────────────────────────────────────

  {
    id:       "jira",
    label:    "Jira",
    keywords: ["jira"],
    pillar:   "hard_skills",
    category: "Gestion de projet",
    weight:   "haute",
  },
  {
    id:       "agile_scrum",
    label:    "Agile / Scrum",
    keywords: ["agile", "scrum", "sprint", "kanban", "méthode agile", "rituel agile"],
    pillar:   "hard_skills",
    category: "Gestion de projet",
    weight:   "haute",
  },
  {
    id:       "confluence",
    label:    "Confluence / Documentation technique",
    keywords: ["confluence", "documentation technique", "wiki"],
    pillar:   "hard_skills",
    category: "Gestion de projet",
    weight:   "faible",
  },


  // ── SOFT SKILLS ───────────────────────────────────────────────────────────────

  {
    id:       "communication_technique",
    label:    "Communication technique",
    keywords: ["communication", "vulgarisation", "présentation technique", "compte-rendu"],
    pillar:   "soft_skills",
    category: "Communication",
    weight:   "haute",
  },
  {
    id:       "travail_equipe",
    label:    "Travail en équipe / Collaboration",
    keywords: ["travail d'équipe", "collaboration", "équipe pluridisciplinaire", "teamwork", "cross-functional"],
    pillar:   "soft_skills",
    category: "Collaboration",
    weight:   "haute",
  },
  {
    id:       "autonomie",
    label:    "Autonomie / Proactivité",
    keywords: ["autonomie", "autonome", "proactif", "proactive", "self-directed", "initiative"],
    pillar:   "soft_skills",
    category: "Autonomie",
    weight:   "moyenne",
  },
  {
    id:       "resolution_problemes",
    label:    "Résolution de problèmes",
    keywords: ["résolution de problèmes", "problem solving", "analytique", "analytical", "débogage", "debugging"],
    pillar:   "soft_skills",
    category: "Analytique",
    weight:   "moyenne",
  },

];
