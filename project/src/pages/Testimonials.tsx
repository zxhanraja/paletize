import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { BackToHome } from '../components/BackToHome';

const testimonials = [
  {
    name: 'Alexandra Martinez',
    role: 'UI/UX Designer',
    company: 'Design Studio',
    content: 'Paletize has completely transformed my workflow. I can generate perfect color palettes in seconds, and the ability to lock colors is a game-changer.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Frontend Developer',
    company: 'Tech Corp',
    content: 'As a developer, I love how easy it is to export colors. The interface is clean and intuitive. Best color tool I\'ve used!',
    rating: 5
  },
  {
    name: 'Sophie Chen',
    role: 'Brand Designer',
    company: 'Creative Agency',
    content: 'The variety of color combinations is amazing. I use Paletize for every new project. It\'s become an essential part of my design process.',
    rating: 5
  },
  {
    name: 'Michael Brown',
    role: 'Art Director',
    company: 'Media Group',
    content: 'Free, powerful, and beautiful. Paletize delivers everything I need without any complexity. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emma Davis',
    role: 'Web Designer',
    company: 'Digital Studio',
    content: 'I\'ve tried many color palette tools, but Paletize stands out. The ability to choose how many colors I need is perfect for different projects.',
    rating: 5
  },
  {
    name: 'David Lee',
    role: 'Creative Director',
    company: 'Brand Agency',
    content: 'Paletize saves me hours of work. The color generation is smart, and the export feature makes it easy to use in any design tool.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-24">
      <BackToHome />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trusted by designers and developers worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


