import { Skeleton } from "@nextui-org/react";
import Loading from "./components/Loading";

export default function App() {
  return (
    <div className="w-full h-screen space-y-5 px-10 py-16 min-h-screen  bg-gradient-to-tl from-slate-900 via-slate-900 to-blue-900">
      <Loading />
    </div>
  );
}
