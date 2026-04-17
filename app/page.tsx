import { About } from "@/components/main/about";
import { AwsCloudPanel } from "@/components/main/aws-cloud-panel";
import { Certifications } from "@/components/main/certifications";
import { Contact } from "@/components/main/contact";
import { DsaVisualizer } from "@/components/main/dsa-visualizer";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { NexusChat } from "@/components/main/nexus-chat";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <AwsCloudPanel />
        <DsaVisualizer />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
      <NexusChat />
    </main>
  );
}

