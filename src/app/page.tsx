import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" w-full p-12 md:py-20 overflow-y-scroll">
      <div className="content max-w-5xl mx-auto space-y-24">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
