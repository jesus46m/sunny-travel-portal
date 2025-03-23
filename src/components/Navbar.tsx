
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, LogOut, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoading, signOut } = useAuth();

  // Controla el cambio de estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Playas", path: "/playas" },
    { name: "Gastronomía", path: "/gastronomia" },
    { name: "Vida Nocturna", path: "/vida-nocturna" },
    { name: "Compras", path: "/compras" },
    { name: "Info", path: "/info" },
    { name: "Contacto", path: "/contacto" },
  ];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={`font-bold text-2xl ${isScrolled ? "text-miami-coral" : "text-white"}`}>
                USA Travel
              </span>
            </Link>
          </div>
          
          {/* Menu de navegación para pantallas grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-miami-coral"
                      : "text-white hover:text-miami-sand"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/registro"
                className="bg-miami-coral text-white hover:bg-miami-coral/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Registrar Visita
              </Link>
              
              {isLoading ? (
                <Loader2 className={`h-5 w-5 animate-spin ${isScrolled ? "text-miami-coral" : "text-white"}`} />
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`p-2 ${isScrolled ? "text-gray-700 hover:text-miami-coral" : "text-white hover:text-miami-sand"}`}
                    >
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/mis-visitas">Mis visitas</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()} className="text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to="/auth"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-miami-coral"
                      : "text-white hover:text-miami-sand"
                  }`}
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
          
          {/* Botón de menú para móviles */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-miami-coral"
                  : "text-white hover:text-miami-sand"
              }`}
            >
              <Menu className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-miami-coral"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/registro"
            className="block px-3 py-2 rounded-md text-base font-medium bg-miami-coral text-white hover:bg-miami-coral/90"
            onClick={() => setIsOpen(false)}
          >
            Registrar Visita
          </Link>
          
          {isLoading ? (
            <div className="px-3 py-2">
              <Loader2 className="h-5 w-5 animate-spin text-miami-coral" />
            </div>
          ) : user ? (
            <>
              <Link
                to="/mis-visitas"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-miami-coral"
                onClick={() => setIsOpen(false)}
              >
                Mis visitas
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-700"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-miami-coral"
              onClick={() => setIsOpen(false)}
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
