import Image from "next/image";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projets";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-700 flex flex-col items-center justify-items-center min-h-screen gap-16 sm:p-20 dark:text-white dark:bg-neutral-900">
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
