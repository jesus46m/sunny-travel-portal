
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Información", path: "/info" },
    { name: "Registro de Visita", path: "/registro" },
    { name: "Contacto", path: "/contacto" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Palmtree className="h-8 w-8 text-miami-coral" />
              <span className="ml-2 text-xl font-bold text-primary">Miami Travel</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-up
                  ${location.pathname === item.path 
                    ? "text-miami-coral" 
                    : "text-gray-700 hover:text-miami-turquoise"}`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-miami-coral text-white hover:bg-miami-turquoise">
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-miami-coral hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${location.pathname === item.path 
                    ? "text-miami-coral bg-gray-100" 
                    : "text-gray-700 hover:text-miami-turquoise hover:bg-gray-50"}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-miami-coral hover:bg-miami-turquoise"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
