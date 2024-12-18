'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/utils/styles';

export const FlipWords = ({
  headlines,
  duration = 2000,
  className,
}: {
  headlines: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [headlines, duration]);

  return (
    <AnimatePresence mode='wait'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={cn(
          'relative z-10 inline-block text-left text-5xl text-blue-500 dark:text-neutral-100',
          className
        )}
        key={headlines[index]}
      >
        {headlines[index]}
      </motion.h1>
    </AnimatePresence>
  );
};
