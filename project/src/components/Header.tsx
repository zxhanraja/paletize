import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette, Zap, Info, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // First, make sure we're on the home page
    if (window.location.hash && window.location.hash !== '#') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { label: 'Generator', icon: Palette, action: () => scrollToSection('generator') },
    { label: 'Features', icon: Zap, action: () => scrollToSection('features') },
    { label: 'About', icon: Info, href: '#about' },
    { label: 'Contact', icon: Mail, href: '#contact' }
  ];

  // Radial menu configuration
  const radius = 120; // Increased radius for better spacing
  const totalAngle = 180; // Semi-circle
  const startAngle = 180; // Start from left

  const getItemPosition = (index: number, total: number) => {
    const step = totalAngle / (total - 1);
    const angleInDegrees = startAngle - (index * step); // Subtract to go clockwise from 180 (left) to 0 (right)
    // Wait, standard math: 0 is right, 90 is up, 180 is left.
    // We want 180 (left) -> 90 (up) -> 0 (right).
    // So we should DECREASE angle from 180 to 0.

    const angleInRadians = (angleInDegrees * Math.PI) / 180;

    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians) * -1; // Flip Y because screen Y is down, we want up

    return { x, y };
  };

  return (
    <>
      <motion.header
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-8 left-1/2 z-40"
      >
        <div className="relative flex items-center justify-center">
          {/* Mobile Menu Items (Radial) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
                {navItems.map((item, index) => {
                  const pos = getItemPosition(index, navItems.length + 1); // +1 for ThemeToggle
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      animate={{ x: pos.x, y: pos.y, opacity: 1, scale: 1 }}
                      exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200, delay: index * 0.03 }}
                      className="absolute pointer-events-auto"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className="w-14 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-800 dark:text-white group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
                            <item.icon size={24} strokeWidth={1.5} />
                          </div>
                          <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                            {item.label}
                          </span>
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            item.action();
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className="w-14 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-800 dark:text-white group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
                            <item.icon size={24} strokeWidth={1.5} />
                          </div>
                          <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                            {item.label}
                          </span>
                        </button>
                      )}
                    </motion.div>
                  );
                })}

                {/* Theme Toggle in Radial Menu */}
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: getItemPosition(navItems.length, navItems.length + 1).x,
                    y: getItemPosition(navItems.length, navItems.length + 1).y,
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: navItems.length * 0.03 }}
                  className="absolute pointer-events-auto"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg flex items-center justify-center overflow-hidden">
                      <ThemeToggle className="!w-full !h-full !bg-transparent !shadow-none !border-none" />
                    </div>
                    <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                      Theme
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Main Dock Container */}
          <div className="backdrop-blur-2xl bg-white/70 dark:bg-black/60 border border-white/20 dark:border-white/10 shadow-2xl rounded-full px-2 py-2 flex items-center justify-center relative z-50">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 px-4">
              {navItems.map((item, index) => (
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={item.action}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 hidden md:block mx-2" />

            <div className="hidden md:block pr-2">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
