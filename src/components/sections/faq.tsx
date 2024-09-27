import { montserrat } from "@/app/font";
import cn from "@/utils/function";
import H2 from "../heading2";

const faqData = {
  "fr": [
    {
      question: "Qui peut rejoindre l'association 404 Devinci ?",
      answer:
        "Que tu sois débutant ou expert, si tu es étudiant au pôle universitaire Léonard de Vinci, tu peux nous rejoindre !",
    },
    {
      question:
        "Dois-je avoir des compétences en coding pour rejoindre l'association ?",
      answer:
        "Non ! Nous recrutons des designers UX/UI, des chargés de communication, et bien sûr des développeurs. Si tu es passionné par le web, tu es le bienvenu !",
    },
    {
      question: "Y a-t-il des frais pour devenir membre de la 404 Devinci ?",
      answer:
        "Non, l'adhésion à l'association est gratuite. Notre objectif est de créer un groupe accessible à tous pour travailler sur des projets concrets et améliorer nos skills.",
    },
    {
      question: "Quels sont les avantages à rejoindre la 404 Devinci ?",
      answer:
        "En nous rejoingnant, tu auras l'opportunité de travailler sur des projets concrets, d'améliorer tes compétences techniques, et de rencontrer d'autres passionnés du développement web. Tu pourras également enrichir ton CV avec des expériences pratiques.",
    },
  ],
  "en": [
    {
      question: "Who can join the 404 Devinci association?",
      answer:
        "Whether you're a beginner or an expert, if you're a student at the Léonard de Vinci university campus, you can join us!",
    },
    {
      question:
        "Do I need coding skills to join the association?",
      answer:
        "No! We recruit UX/UI designers, communication officers, and of course, developers. If you're passionate about the web, you're welcome!",
    },
    {
      question: "Are there any fees to become a member of 404 Devinci?",
      answer:
        "No, membership is free. Our goal is to create an accessible group for everyone to work on real projects and improve our skills.",
    },
    {
      question: "What are the benefits of joining 404 Devinci?",
      answer:
        "By joining us, you'll have the opportunity to work on real projects, improve your technical skills, and meet other web development enthusiasts. You can also enhance your CV with practical experience.",
    },
  ]
};


const FaqSection = () => {
  return (
    <div className="w-full max-w-[1700px] mx-auto my-80 px-5 lg:px-10 flex flex-col 
      lg:flex-row lg: justify-between gap-y-12 gap-x-10 "
    >
      <H2 className="flex flex-col flex-shrink-0">
        <span className={cn(montserrat.className)}>questions &</span>
        <span> answers</span>
      </H2>
      <div className="flex flex-col w-full max-w-3xl">
        {faqData.en.map(({ question, answer }, index) => (
          <div 
            key={`faq:${index}`} 
            className={cn(
              "flex flex-col gap-2 py-8 px-2",
              index === 0 ? "border-t border-b border-gray-800" : "border-b border-gray-800"
            )}
          >
            <h3 className="text-lg font-semibold text-gray-50">{question}</h3>
            <p className="text-gray-300">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
