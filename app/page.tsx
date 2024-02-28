import Home from "./Components/Home";
import Nav from "./Components/Nav";

const page = () => {
  return (
    <div className="flex flex-col bg-red-300 grow bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900">
      <Nav />
      <Home />
    </div>
  );
};

export default page;
