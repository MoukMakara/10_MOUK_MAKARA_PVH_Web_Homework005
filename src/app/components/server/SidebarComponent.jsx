import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

export default function SidebarComponent() {
  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, active: true },
    { name: "Items", icon: Box, active: true },
    { name: "Orders", icon: ShoppingCart, active: true },
    { name: "Customers", icon: Users, active: true },
    { name: "Settings", icon: Settings, active: true },
  ];

  return (
    <aside className="w-64 bg-[#13151f] h-full p-4 flex flex-col border-r border-gray-800 hidden md:flex">
      <div className="text-xs font-semibold text-gray-500 mb-4 ">Menu</div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              item.active
                ? "bg-[#1e2130] text-white"
                : "text-gray-400 hover:bg-[#1e2130] hover:text-white"
            }`}
          >
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
