import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import * as THREE from 'three';

function Scene({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = isDark ? Math.PI : 0;
    }
  }, [isDark]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={isDark ? "#1e293b" : "#fbbf24"}
          emissive={isDark ? "#0f172a" : "#f59e0b"}
          roughness={0.5}
        />
      </mesh>
    </Canvas>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 shadow-inner flex items-center justify-center transition-all duration-300 overflow-hidden relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {isDark ? <Moon className="w-5 h-5 text-gray-200" /> : <Sun className="w-5 h-5 text-amber-500" />}
      </div>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Scene isDark={isDark} />
      </div>
    </motion.button>
  );
}