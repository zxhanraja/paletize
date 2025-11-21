import { useState, useEffect } from 'react';
import { Download, Copy, Shuffle } from 'lucide-react';
import { motion } from 'framer-motion';

type Color = {
  hex: string;
  locked: boolean;
};

export function ColorPalette() {
  const [colorCount, setColorCount] = useState(5);
  const [colors, setColors] = useState<Color[]>([]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateInitialPalette = (count: number) => {
    return Array.from({ length: count }, () => ({
      hex: generateRandomColor(),
      locked: false
    }));
  };

  useEffect(() => {
    setColors(generateInitialPalette(colorCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorCount]);

  const regeneratePalette = () => {
    setColors(colors.map(color => 
      color.locked ? color : { ...color, hex: generateRandomColor() }
    ));
  };

  const handleColorCountChange = (newCount: number) => {
    const currentLocked = colors.filter(c => c.locked);
    const newColors = generateInitialPalette(newCount);
    
    // Preserve locked colors if possible
    currentLocked.forEach((lockedColor, index) => {
      if (index < newColors.length) {
        newColors[index] = lockedColor;
      }
    });
    
    setColors(newColors);
    setColorCount(newCount);
  };

  const toggleLock = (index: number) => {
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exportPalette = () => {
    const cssCode = colors.map(color => color.hex).join('\n');
    const blob = new Blob([cssCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palette.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Number of Colors:
        </label>
        <div className="flex gap-2 flex-wrap justify-center">
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
            <button
              key={count}
              onClick={() => handleColorCountChange(count)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                colorCount === count
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 sm:h-56 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: color.hex }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <div className="flex justify-between items-center">
                <span className="font-mono">{color.hex}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleLock(index)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {color.locked ? '🔒' : '🔓'}
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={regeneratePalette}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
        >
          <Shuffle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Generate New Palette</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={exportPalette}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Export Palette</span>
        </motion.button>
      </div>
    </div>
  );
}