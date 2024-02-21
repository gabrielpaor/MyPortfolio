import Image from "next/image";
import Introduction from "./Introduction/page";
import Navbar from "./Navbar/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <main className="flex min-h-screen flex-col max-w-screen-xl mx-auto px-4 py-2">
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
