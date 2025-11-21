import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { BackToHome } from '../components/BackToHome';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Color Theory: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of color theory and how to apply them to create harmonious palettes.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Design',
    content: `Color theory is the foundation of all great design. Understanding how colors work together can transform your projects from good to exceptional.

The color wheel is divided into primary colors (red, blue, yellow), secondary colors (orange, green, purple), and tertiary colors. Complementary colors sit opposite each other on the wheel and create vibrant contrast, while analogous colors sit next to each other and create harmonious schemes.

When creating color palettes, consider the emotional impact of each color. Warm colors like red and orange evoke energy and passion, while cool colors like blue and green create calm and trust. Neutral colors provide balance and sophistication.

Practical tips for applying color theory:
- Use the 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent
- Test your palette in both light and dark modes
- Consider accessibility - ensure sufficient contrast ratios
- Start with a base color and build your palette around it

Remember, the best color palettes tell a story and evoke the right emotions for your audience.`
  },
  {
    id: 2,
    title: 'Top 10 Color Palettes for Modern Web Design',
    excerpt: 'Discover the most popular color combinations used by top designers in 2024.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Web Design',
    content: `Modern web design in 2024 embraces bold, vibrant palettes that create memorable user experiences. Here are the top 10 color combinations dominating the web:

1. **Neon Dreams**: Electric blues, vibrant purples, and hot pinks create an energetic, futuristic feel perfect for tech and creative brands.

2. **Earth Tones**: Warm browns, sage greens, and terracotta bring nature indoors, ideal for sustainable and wellness brands.

3. **Ocean Breeze**: Deep teals, soft aquas, and sandy beiges evoke calm and trust, perfect for finance and healthcare.

4. **Sunset Gradient**: Oranges, pinks, and purples create warmth and optimism, great for lifestyle and entertainment sites.

5. **Minimalist Monochrome**: Shades of gray with a single accent color provide sophistication and focus.

6. **Forest Green**: Deep greens with gold accents convey luxury and sustainability.

7. **Berry Burst**: Rich purples, magentas, and deep reds create bold, confident statements.

8. **Sky Blue**: Light blues and whites create an open, airy feeling perfect for SaaS and productivity tools.

9. **Warm Neutrals**: Beiges, creams, and soft browns provide comfort and approachability.

10. **High Contrast**: Black, white, and one vibrant color create maximum impact and readability.

Each palette serves different purposes, so choose based on your brand personality and target audience.`
  },
  {
    id: 3,
    title: 'How to Choose Colors for Your Brand Identity',
    excerpt: 'A comprehensive guide to selecting colors that represent your brand effectively.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Branding',
    content: `Your brand colors are more than just aesthetics—they're a powerful communication tool. Here's how to choose colors that authentically represent your brand:

**Step 1: Define Your Brand Personality**
Before choosing colors, clearly define your brand's personality. Are you professional and trustworthy? Creative and bold? Natural and organic? Your personality should guide your color choices.

**Step 2: Research Your Industry**
Look at successful brands in your industry. While you want to stand out, you also need to meet customer expectations. A healthcare brand might use blues and greens for trust, while a creative agency might use vibrant, unexpected combinations.

**Step 3: Understand Color Psychology**
- **Blue**: Trust, professionalism, stability
- **Green**: Growth, health, nature, sustainability
- **Red**: Energy, passion, urgency, excitement
- **Yellow**: Optimism, creativity, warmth
- **Purple**: Luxury, creativity, wisdom
- **Orange**: Enthusiasm, friendliness, innovation
- **Black**: Sophistication, elegance, power
- **White**: Simplicity, cleanliness, minimalism

**Step 4: Test Across Mediums**
Your colors need to work in digital and print. Test your palette on screens, business cards, packaging, and signage. Ensure consistency across all touchpoints.

**Step 5: Consider Accessibility**
Ensure your color combinations meet WCAG contrast guidelines. This isn't just good practice—it's often legally required and expands your audience.

**Step 6: Start with 2-3 Colors**
A strong brand palette typically includes 2-3 primary colors plus neutrals. Too many colors can dilute your brand identity.

Remember: Your brand colors should be distinctive, memorable, and aligned with your brand values. They're one of the first things people notice about your brand.`
  },
  {
    id: 4,
    title: 'Color Psychology in UI/UX Design',
    excerpt: 'Explore how different colors affect user behavior and emotions in digital interfaces.',
    author: 'David Kim',
    date: '2023-12-28',
    category: 'UX Design',
    content: `Color psychology plays a crucial role in user experience design. The colors you choose can significantly impact how users perceive and interact with your interface.

**The Science Behind Color Psychology**
Colors trigger specific psychological responses. Understanding these can help you guide user behavior and create better experiences.

**Primary Colors and Their Effects:**

**Red** - Creates urgency and draws attention. Use sparingly for CTAs, errors, or important alerts. Can also evoke passion and energy.

**Blue** - The most trusted color. Promotes calm, security, and professionalism. Ideal for financial, healthcare, and tech applications.

**Green** - Associated with growth, success, and nature. Perfect for confirmation messages, success states, and eco-friendly brands.

**Yellow** - Grabs attention but can cause eye strain. Use for warnings and highlights. Conveys optimism and creativity.

**Purple** - Represents luxury, creativity, and wisdom. Great for creative tools, premium products, and innovative brands.

**Orange** - Friendly and energetic. Good for secondary CTAs and playful interfaces. Less aggressive than red.

**Black/Gray** - Professional and sophisticated. Excellent for text, backgrounds, and premium brands.

**White** - Clean and minimal. Creates breathing room and focus. Essential for modern, minimalist designs.

**Best Practices:**
1. Use color to establish hierarchy - brighter colors draw attention
2. Maintain consistency - use the same colors for the same actions throughout
3. Consider cultural differences - color meanings vary globally
4. Test with users - what works in theory may not work for your audience
5. Don't rely solely on color - use icons and text for accessibility

**Common Mistakes to Avoid:**
- Using too many colors (creates confusion)
- Ignoring contrast ratios (hurts accessibility)
- Not considering colorblind users
- Using red/green for status (colorblind users can't distinguish)

The key is to use color intentionally to guide users, create emotional connections, and enhance usability.`
  }
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <BackToHome />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Design Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Tips, tutorials, and insights about color and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 sm:px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.author}
                  </div>
                  <button
                    onClick={() => setSelectedPost(post.id)}
                    className="flex items-center gap-2 text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {blogPosts
                .filter((post) => post.id === selectedPost)
                .map((post) => (
                  <div key={post.id} className="p-6 sm:p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                          {post.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                        {post.content}
                      </p>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


