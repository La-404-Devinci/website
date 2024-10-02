import AboutSection from "@/components/sections/about";
import FaqSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import ProjectsSection from "@/components/sections/projects";
import TeamSection from "@/components/sections/team";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  return (
    <div className="text-gray-50">
      <Header />
      <ProjectsSection />
      <AboutSection />  
      <TeamSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
