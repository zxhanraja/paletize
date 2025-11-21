import { motion } from 'framer-motion';
import { Palette, Users, Target, Heart } from 'lucide-react';
import { BackToHome } from '../components/BackToHome';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-24">
      <BackToHome />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Paletize
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Empowering creativity through beautiful color palettes
          </p>
        </motion.div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Paletize, we believe that color is one of the most powerful tools in design. Our mission is to make 
              it easy for designers, developers, and creatives to discover, create, and share beautiful color palettes 
              that bring their projects to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Palette className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Color Generation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Generate unlimited color palettes with our advanced algorithm
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">For Everyone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Free and accessible to designers, developers, and artists worldwide
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy Export</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Export your palettes in multiple formats for any project
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Heart className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Made with Love</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built by creatives, for creatives, with passion and dedication
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Paletize was born from a simple need: finding the perfect color palette shouldn't be complicated. 
              As designers and developers ourselves, we've experienced the frustration of spending hours searching 
              for the right color combinations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, Paletize serves thousands of users worldwide, helping them create stunning color palettes 
              in seconds. We're committed to continuously improving our tools and adding new features based on 
              your feedback.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


