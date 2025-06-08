import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0E0E0E] relative">
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wider">
            audiophile
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
              HOME
            </a>
            <a href="#" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
              HEADPHONES
            </a>
            <a href="#" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
              SPEAKERS
            </a>
            <a href="#" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
              EARPHONES
            </a>
          </div>

          {/* Cart icon */}
          <div className="text-white cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
            <ShoppingCart size={23} />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white z-50 border-t">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                HOME
              </a>
              <a href="#" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                HEADPHONES
              </a>
              <a href="#" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                SPEAKERS
              </a>
              <a href="#" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                EARPHONES
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}