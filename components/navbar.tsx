'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/utils/cn';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { InputWithPlaceholder } from './inputWithPlaceholder';

const navItems = [
  {
    name: 'home',
    icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'solutions',
    icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'blog',
    icon: <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
];

export const FloatingNav = ({
  className,
  scrollRange,
}: {
  className?: string;
  scrollRange: [number, number];
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      const [_, maxScrollRange] = scrollRange;

      if (current <= maxScrollRange) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          x: visible ? 0 : -200,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          'fixed inset-x-0 top-0 z-10 mx-auto grid h-20 w-full grid-cols-3 items-center border-b border-blue-200 bg-white py-2 pl-8 pr-2 dark:border-white/[0.2] dark:bg-black',
          className
        )}
      >
        <div className='col-span-1' />
        <div className='col-span-1 flex items-center justify-center space-x-10'>
          {navItems.map((navItem: any, idx: number) => (
            <button
              key={`button=${idx}`}
              className='relative flex items-center space-x-1 pt-4 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            >
              <span className={cn('block sm:hidden')}>{navItem.icon}</span>
              <span
                className={cn(
                  'hidden w-24 font-medium capitalize hover:text-green-500 sm:block',
                  {
                    'text-green-500': idx === 0,
                  }
                )}
              >
                {navItem.name}
                <hr
                  className={cn(
                    'my-1 h-1 w-full rounded-sm border-0 bg-green-500',
                    {
                      invisible: idx !== 0,
                    }
                  )}
                />
              </span>
            </button>
          ))}
        </div>
        <div className='col-span-1 grid grid-cols-3 space-x-1'>
          <div className='col-span-2 w-full'>
            <InputWithPlaceholder />
          </div>
          <button className='relative right-10 col-span-1 w-fit justify-self-end rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white'>
            <span>Login</span>
            <span className='absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent' />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
