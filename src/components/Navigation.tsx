import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/upload", label: "Upload Data" },
    { to: "/results", label: "Results" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-ocean shadow-ocean sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-white" />
            <div className="text-white">
              <h1 className="text-xl font-bold">DeepSea eDNA</h1>
              <p className="text-sm text-white/80">Biodiversity Analysis Platform</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;