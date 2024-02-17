import Image from "next/image";
import Introduction from "./Introduction/page";
import Navbar from "./Navbar/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col max-w-screen-xl mx-auto px-4 py-5">
        <Introduction />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
