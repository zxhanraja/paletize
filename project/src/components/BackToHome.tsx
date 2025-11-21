import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export function BackToHome() {
  const handleClick = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-16 sm:top-20 left-2 sm:left-4 z-40 flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 text-sm sm:text-base"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">Back to Home</span>
      <Home className="w-4 h-4 sm:hidden" />
    </motion.button>
  );
}

