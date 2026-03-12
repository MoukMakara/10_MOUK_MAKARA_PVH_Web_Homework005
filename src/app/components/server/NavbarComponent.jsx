import Image from "next/image";
import SearchComponent from "../client/SearchComponent";

export default function NavbarComponent() {
  return (
    <header className="h-16 bg-[#0f111a] border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-xs">
            <Image
              src="/cat.jpg"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-white font-semibold tracking-wide">Dashboard</h1>
      </div>
      <SearchComponent />
    </header>
  );
}
