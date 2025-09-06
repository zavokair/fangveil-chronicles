import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ghost, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Explore', path: '/' },
    { name: 'Rituals', path: '/rituals' },
    { name: 'Submit Case', path: '/submit' },
    { name: 'Cases', path: '/cases' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Map', path: '/map' },
    { name: 'Diary', path: '/diary' },
  ];

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 glass border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-glow neon-glow transition-all duration-300 group-hover:scale-105">
            <Ghost className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-lg tracking-wide">Fangveil Society</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          <Link 
            to="/community" 
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-secondary to-secondary-glow text-black font-semibold transition-all duration-300 hover:scale-105 emerald-glow"
          >
            Join Society
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg glass"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden glass border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/community" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-2 rounded-xl bg-gradient-to-r from-secondary to-secondary-glow text-black font-semibold"
            >
              Join Society
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;