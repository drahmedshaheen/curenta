'use client';
import { cn } from '@/utils/cn';
import { observer, useObservable } from '@legendapp/state/react';
import { motion } from 'framer-motion';
import { z } from 'zod';

const InputSchema = z.string().email();

export const InputWithPlaceholder = observer(function Component() {
  const value = useObservable('');

  const isEmail = InputSchema.safeParse(value.get()).success;

  return (
    <div className='relative h-10 w-full rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200'>
      <input
        onChange={(e) => value.set(e.target.value)}
        value={value.get()}
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
});
