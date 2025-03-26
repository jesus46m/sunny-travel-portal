
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Gracias por suscribirte a nuestro newsletter!");
      setEmail("");
    } else {
      toast.error("Por favor, introduce un email válido");
    }
  };
  
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", name: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", name: "Twitter" }
  ];

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Información", path: "/info" },
    { name: "Registro de Visita", path: "/registro" },
    { name: "Contacto", path: "/contacto" },
    { name: "Playas", path: "/playas" },
    { name: "Gastronomía", path: "/gastronomia" },
    { name: "Vida Nocturna", path: "/vida-nocturna" },
    { name: "Compras", path: "/compras" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="glass-card bg-white/5 p-6 rounded-xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-miami-turquoise">Suscríbete a Nuestro Newsletter</h3>
              <p className="text-gray-300">Recibe las últimas noticias y ofertas de viaje en tu bandeja de entrada.</p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-grow px-4 py-2 text-black rounded-l-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="bg-miami-coral hover:bg-miami-turquoise text-white px-4 py-2 rounded-r-md">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-miami-coral" />
                <span>New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-miami-coral" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-miami-coral" />
                <span>info@ustravel.com</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-miami-turquoise">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-miami-coral transition-colors bg-white/10 p-2 rounded-full"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="flex items-center text-gray-300 hover:text-miami-coral transition-colors py-1"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Sobre Nosotros</h3>
            <p className="text-gray-300 mb-4">
              Somos tu guía definitiva para explorar Estados Unidos, ofreciendo consejos expertos, 
              itinerarios personalizados y experiencias auténticas para que disfrutes al máximo tu viaje.
            </p>
            <Button 
              variant="outline" 
              className="border-miami-coral text-miami-coral hover:bg-miami-coral hover:text-white"
              onClick={() => window.location.href = '/contacto'}
            >
              Contáctanos
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} US Travel Portal. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-miami-coral transition-colors">Términos y Condiciones</Link>
            <Link to="/" className="hover:text-miami-coral transition-colors">Política de Privacidad</Link>
            <Link to="/" className="hover:text-miami-coral transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
