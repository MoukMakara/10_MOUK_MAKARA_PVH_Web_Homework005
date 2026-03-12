import SidebarComponent from "./components/server/SidebarComponent";
import NavbarComponent from "./components/server/NavbarComponent";
import MainComponent from "./components/server/MainComponent";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#0f111a] overflow-hidden font-sans">
      <NavbarComponent />

      <div className="flex flex-1 overflow-hidden">
        <SidebarComponent />
        <MainComponent />
      </div>
    </div>
  );
}
