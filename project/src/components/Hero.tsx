import { Sparkles, Zap, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    // First, make sure we're on the home page
    if (window.location.hash && window.location.hash !== '') {
      window.location.hash = '';
      // Wait a bit for the page to render
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    // Try multiple times in case element isn't ready yet
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - headerHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Logo size="lg" showText={true} className="justify-center" />
            </motion.div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Professional Color Palette Generator
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Create Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Color Palettes
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Generate, customize, and export beautiful color combinations
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Trusted by designers, developers, and creative professionals worldwide
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('generator');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/50 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Creating Now
              </motion.button>
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Zap className="w-5 h-5 text-indigo-600" />
                Explore Features
              </motion.button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Free to Use</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Unlimited Palettes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Export Formats</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}