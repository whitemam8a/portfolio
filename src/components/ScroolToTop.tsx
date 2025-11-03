'use client';

import { ScroolToTop } from '@/icons/icons';
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-15 right-15 z-50
        w-12 h-12 rounded-full
        bg-black text-white shadow-lg
        flex items-center justify-center
        transition-opacity duration-300 cursor-pointer
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        hover:bg-gray-800
      `}
      aria-label="Scroll to top"
    >
      <ScroolToTop />
    </button>
  );
}
