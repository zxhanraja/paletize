import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingBarProps {
  routeKey?: string;
}

export function LoadingBar({ routeKey }: LoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset and start loading
    setProgress(0);
    setIsLoading(true);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [routeKey]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-slate-800">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

