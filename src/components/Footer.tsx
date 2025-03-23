
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-miami-coral" />
                <span>Miami Beach, FL 33139, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-miami-coral" />
                <span>+1 (305) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-miami-coral" />
                <span>info@miamitravelportal.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-miami-coral transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/info" className="hover:text-miami-coral transition-colors">Información</Link>
              </li>
              <li>
                <Link to="/registro" className="hover:text-miami-coral transition-colors">Registro de Visita</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-miami-coral transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-miami-coral transition-colors">Admin</Link>
              </li>
            </ul>
          </div>
          
          {/* Social and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-miami-turquoise">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              {/* Changed anchor tags to plain divs to avoid router context issues */}
              <div className="hover:text-miami-coral transition-colors cursor-pointer">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="hover:text-miami-coral transition-colors cursor-pointer">
                <Facebook className="h-6 w-6" />
              </div>
              <div className="hover:text-miami-coral transition-colors cursor-pointer">
                <Twitter className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-miami-turquoise">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-2">Suscríbete para recibir las últimas noticias</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="px-3 py-2 text-black rounded-l-md focus:outline-none flex-1"
              />
              <button className="bg-miami-coral text-white px-4 py-2 rounded-r-md hover:bg-miami-turquoise transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Miami Travel Portal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
