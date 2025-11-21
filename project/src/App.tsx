import React, { useState, useEffect } from 'react';

import { LoadingBar } from './components/LoadingBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ColorPalette } from './components/ColorPalette';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Testimonials } from './pages/Testimonials';
import { BackToHome } from './components/BackToHome';

import { Logo } from './components/Logo';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && ['about', 'blog', 'contact', 'faq', 'testimonials', 'features'].includes(hash)) {
      setCurrentPage(hash);
    } else {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['about', 'blog', 'contact', 'faq', 'testimonials', 'features'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      case 'testimonials':
        return <Testimonials />;
      case 'features':
        return (
          <div className="min-h-screen">
            <BackToHome />
            <Features />
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <main>
              <section id="generator" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      Create Your Perfect Palette
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                      Generate, customize, and export beautiful color combinations
                    </p>
                  </div>
                  <ColorPalette />
                </div>
              </section>
              <Features />
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <LoadingBar routeKey={currentPage} />

      {/* Fixed Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Logo size="md" showText={false} />
      </div>

      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;