import Navbar from "./components/Navbar";
import Upper from "./components/Upper";
import MiddleOne from "./components/MiddleOne";
import MiddleTwo from "./components/MiddleTwo";
import Bottom from "./components/Bottom";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Navbar />

      {/* Main content area on the right (stacked vertically) */}
      <div className="flex-grow flex flex-col p-6 gap-6 ml-[250px] ">
        <Upper />
        <MiddleOne />
        <MiddleTwo/>
        <Bottom/>
      </div>
    </div>
  );
}
