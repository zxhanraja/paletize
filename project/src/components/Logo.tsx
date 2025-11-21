import { Palette } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <Palette className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-7 h-7'} text-white`} />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl opacity-0 hover:opacity-100 blur-sm -z-10"
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${className.includes('text-white') ? '!text-white' : ''}`}>
          Paletize
        </span>
      )}
    </motion.div>
  );
}

