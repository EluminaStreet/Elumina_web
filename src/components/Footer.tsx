import { Linkedin, Instagram , Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Elumina Street Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}