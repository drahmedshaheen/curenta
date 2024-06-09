'use client';
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { cn } from 'utils/cn';
import { z } from 'zod';
import { forwardRef, useState, type RefObject } from 'react';

interface FloatingNavProps {
  // ref: RefObject<HTMLDivElement>;
  className?: string;
  scrollRange: [number, number];
  navItems: string[];
  // animationValues: {
  //   x: [number, number];
  //   y: [number, number];
  //   scale: [number, number];
  // };
}

export const FloatingNav = forwardRef<HTMLDivElement, FloatingNavProps>(
  (props, ref) => {
    const { navItems, scrollRange, className } = props;

    const { scrollYProgress } = useScroll({
      target: ref as RefObject<HTMLDivElement>,
      layoutEffect: false,
    });

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === 'number') {
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
            'fixed inset-x-0 top-0 z-10 mx-auto grid h-20 w-full grid-cols-3 items-center border-b border-blue-200 bg-white/70 py-2 pl-8 pr-2 backdrop-blur-lg dark:border-white/[0.2] dark:bg-black',
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
                <span
                  className={cn(
                    'hidden w-24 font-medium capitalize hover:text-green-500 sm:block',
                    {
                      'text-green-500': idx === 0,
                    }
                  )}
                >
                  {navItem}
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
  }
);

export const InputWithPlaceholder = () => {
  const InputSchema = z.string().email();
  const [value, setValue] = useState('');
  const isEmail = InputSchema.safeParse(value).success;

  return (
    <div className='relative h-10 w-full rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200'>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='email address'
        type='text'
        className='relative z-50 h-full w-full rounded-full border-none bg-transparent pl-4 pr-20 text-sm text-black placeholder:text-sm placeholder:font-light placeholder:capitalize focus:outline-none focus:ring-0 sm:pl-10 sm:text-base dark:text-white'
      />

      <button
        disabled={!isEmail}
        type='submit'
        className='absolute right-2 top-1/2 z-50 flex h-8 w-40 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 transition duration-200 disabled:bg-gray-100 dark:bg-zinc-900 dark:disabled:bg-zinc-800'
      >
        <span
          className={cn('capitalize', {
            'text-white': isEmail,
          })}
        >
          Request Demo
        </span>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          className='h-4 w-4 text-white'
        >
          {['M13 18l6 -6', 'M13 6l6 6'].map((path, idx) => (
            <motion.path
              key={idx}
              initial={{
                strokeDasharray: '50%',
                strokeDashoffset: '50%',
              }}
              animate={{
                strokeDashoffset: isEmail ? 0 : '50%',
              }}
              transition={{
                duration: 0.7,
                ease: 'linear',
              }}
              d={path}
            />
          ))}
        </motion.svg>
      </button>
    </div>
  );
};
