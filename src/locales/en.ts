import { footer } from "framer-motion/client";

export default {
  hello: "Hello",
  "hello.world": "Hello world!",
  welcome: "Hello {name}!",


  projects : {
    'title': "What we made",
    'title.2': "Discover our projects",
    "project": {
      "pixel-war": {
        "name": "Pixel War"
      },
      "hacker-journey": {
        "name": "Hacker's Journey"
      },
      "forum-associatif": {
        "name": "Association Forum"
      }
    }
  },

  about: {
    "who-we-are.title": "Who we are",
    "who-we-are.description":
      "404 Devinci is an association focused on web development and UI/UX design. We're also interested in emerging technologies such as AI and IoT. Our aim is to bring together students who are passionate about the digital world and create innovative projects together.",
    "who-we-are.description2":
      "We work on the creation of web sites and applications, both in-house and in collaboration with our partners. We are also involved in communication activities and organize various events related to our field.",
  },

  team : {
    'title': 'Our team',
    'title.2': 'Meet the team',
    "members" : {
      "nicolas" : {
        "position": "President",
      },
      "matteo" : {
        "position": "Secretary",
      },
      "michel" : {
        "position": "Tresory",
      }
    }, 
  },
  faq: {
    "title": "questions &",
    "title.2": "answers",
    "question0": "Who can join the 404 Devinci association?",
    "answer0":
      "Whether you're a beginner or an expert, if you're a student at the Léonard de Vinci university campus, you can join us!",
    "question1": "Do I need coding skills to join the association?",
    "answer1":
      "No! We recruit UX/UI designers, communication officers, and of course, developers. If you're passionate about the web, you're welcome!",
    "question2": "Are there any fees to become a member of 404 Devinci?",
    "answer2":
      "No, membership is free. Our goal is to create an accessible group for everyone to work on real projects and improve our skills.",
    "question3": "What are the benefits of joining 404 Devinci?",
    "answer3":
      "By joining us, you'll have the opportunity to work on real projects, improve your technical skills, and meet other web development enthusiasts. You can also enhance your CV with practical experience.",
  },

  footer : {
    "rights": "2024 © All Rights Reserved",
    "legal-notices": "Legal notices",
    "social-media": "Social media",
  }
} as const;
