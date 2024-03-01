import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen w-screen min-w-[360px] bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900">
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Blogs />
    </main>
  );
};

export default page;
