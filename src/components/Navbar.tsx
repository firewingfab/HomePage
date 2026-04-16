import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="container mx-auto">
          <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Rocket className="text-white" size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter">FIREWING<span className="text-brand-accent">FAB</span></span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors relative ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/community"
                className="hidden sm:block px-6 py-2 bg-brand-accent text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
              >
                Join Club
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMenu}
                className="md:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-light"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-brand-blue/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-brand-blue border-l border-white/10 z-[70] p-10 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-12">
                <Rocket className="text-brand-accent" size={32} />
                <span className="text-2xl font-black tracking-tighter">FIREWING<span className="text-brand-accent">FAB</span></span>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={toggleMenu}
                    className={`text-xl font-bold uppercase tracking-widest ${
                      location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to="/community"
                  onClick={toggleMenu}
                  className="block w-full text-center py-4 bg-brand-accent text-white rounded-2xl font-bold text-lg"
                >
                  Join Club
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
