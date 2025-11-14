import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Sentidos</span>
            </div>
            <p className="text-gray-400 mb-4">
              Comunidad centrada en compartir experiencias y conectar personas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Términos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-orange-500 mt-1" />
                <span className="text-gray-400">sentidospadres@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <span className="text-gray-400">Rosario, Santa Fe, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sentidos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;