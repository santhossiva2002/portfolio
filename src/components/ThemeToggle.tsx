import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme toggle only works client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-24 right-4 z-50 lg:right-8 lg:bottom-8 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="ri-sun-line text-xl text-yellow-500"></i>
      ) : (
        <i className="ri-moon-line text-xl text-blue-700"></i>
      )}
    </motion.button>
  );
}