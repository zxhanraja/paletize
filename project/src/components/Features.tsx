import { Palette, Wand2, Download, Lock, Sparkles, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Palette,
    title: 'Custom Palettes',
    description: 'Create and customize your own color palettes with our intuitive interface.'
  },
  {
    icon: Wand2,
    title: 'AI Suggestions',
    description: 'Get intelligent color suggestions powered by our advanced AI algorithm.'
  },
  {
    icon: Download,
    title: 'Multiple Exports',
    description: 'Export your palettes in various formats including CSS, PNG, and more.'
  },
  {
    icon: Lock,
    title: 'Color Locking',
    description: 'Lock specific colors while generating new palettes to maintain consistency.'
  },
  {
    icon: Sparkles,
    title: 'Harmony Rules',
    description: 'Apply color harmony rules to create perfectly balanced palettes.'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your palettes with others via a simple link or social media.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Perfect Palettes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to create stunning color combinations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}