import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

const page = () => {
  return (
    <main className="flex flex-col bg-red-300 grow bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900">
      <Nav />
      <Home />
      <Skills />
    </main>
  );
};

export default page;
