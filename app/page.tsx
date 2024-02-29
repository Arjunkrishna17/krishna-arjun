import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen w-screen min-w-[360px] bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900">
      <Nav />
      <Home />
      <Skills />
      <Projects />
    </main>
  );
};

export default page;
