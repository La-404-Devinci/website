import { footer } from "framer-motion/client";

export default {
  hello: "Bonjour",
  "hello.world": "Bonjour le monde!",


  projects : {
    'title': "Que faisons nous ?",
    'title.2': "Découvrez nos projets",
    "project": {
      "pixel-war": {
        "name": "Pixel War"
      },
      "hacker-journey": {
        "name": "Hacker's Journey"
      },
      "forum-associatif": {
        "name": "Forum Associatif"
      }
    }
  },

  about: {
    "who-we-are.title": "Qui sommes-nous ?",
    "who-we-are.description":
      "404 Devinci est une association dédiée à la création de sites web et d'applications, ainsi que à l'UI/UX. Nous sommes également intéressés par les technologies émergentes tels que l'IA et l'IoT. Notre objectif est de rassembler des étudiants passionnés par le monde numérique et de créer des projets innovants ensemble.",
    "who-we-are.description2":
      "Nous travaillons sur la création de sites web et d'applications, à l'intérieur et en collaboration avec nos partenaires. Nous sommes également impliqués dans des activités de communication et organisons diverses événements liés à notre domaine.",
  },

  team : {
    'title': 'Notre équipe',
    'title.2': 'Rencontrer notre équipe',
    "members" : {
      "nicolas" : {
        "position": "Président",
      },
      "matteo" : {
        "position": "Secrétaire",
      },
      "michel" : {
        "position": "Trésorier",  
      }
    }, 
  },

  faq : {
    "title": "questions &",
    "title.2": "réponses",
    "question0": "Qui peut rejoindre l'association 404 Devinci ?",
    "answer0": "Que tu sois débutant ou expert, si tu es étudiant au pôle universitaire Léonard de Vinci, tu peux nous rejoindre !",
    "question1": "Dois-je avoir des compétences en coding pour rejoindre l'association ?",
    "answer1": "Non ! Nous recrutons des designers UX/UI, des chargés de communication, et bien sûr des développeurs. Si tu es passionné par le web, tu es le bienvenu !",
    "question2": "Y a-t-il des frais pour devenir membre de la 404 Devinci ?",
    "answer2": "Non, l'adhésion à l'association est gratuite. Notre objectif est de créer un groupe accessible à tous pour travailler sur des projets concrets et améliorer nos skills.",
    "question3": "Quels sont les avantages à rejoindre la 404 Devinci ?",
    "answer3": "En nous rejoingnant, tu auras l'opportunité de travailler sur des projets concrets, d'améliorer tes compétences techniques, et de rencontrer d'autres passionnés du développement web. Tu pourras également enrichir ton CV avec des expériences pratiques.",
  },

  footer: {
    "rights": "2024 © Tous droits réservés",
    "legal-notices": "Mentions légales",
    "social-media": "Réseaux sociaux",
  },
} as const;
