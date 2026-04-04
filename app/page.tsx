import { About } from "@/components/main/about";
import { Achievements } from "@/components/main/achievements";
import { Certifications } from "@/components/main/certifications";
import { Contact } from "@/components/main/contact";
import { Education } from "@/components/main/education";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { ProfileSections } from "@/components/main/profile-sections";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Testimonials } from "@/components/main/testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Projects />
        <Testimonials />
        <Encryption />
        <Contact />
      </div>
    </main>
  );
}
