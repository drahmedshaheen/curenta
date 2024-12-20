'use client';
import { CurentaLogo } from '@/icons/curenta-logo';
import { cn } from '@/utils/styles';
import { motion } from 'motion/react';
import { useState, Fragment, useEffect } from 'react';
import { z } from 'zod';
import { Button } from './ui/button';
import { Show } from './ui/show';
import NavBarMobile from './nav-bar-mobile';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='sticky inset-x-0 top-0 z-50 h-12 w-full bg-white lg:h-20'>
      <div className='flex h-full items-center justify-between px-5 lg:px-32'>
        <CurentaLogo className='w-32 lg:w-44' />

        <Show if={!isMobile} else={<NavBarMobile />}>
          <Fragment>
            <Button className='w-32' variant='ghost'>
              Blogs
            </Button>

            <Button
              className='w-32'
              onClick={() =>
                window.location.assign('https://dashboard.curenta.com/login')
              }
            >
              Login
            </Button>
          </Fragment>
        </Show>

        {/* <div className='col-span-1 flex items-center justify-center space-x-10'>
          {['home', 'solutions', 'blog'].map((navItem: string) => (
            <button
              type='button'
              key={`button=${navItem}`}
              className='relative flex items-center space-x-1 pt-4 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            >
              <span
                className={cn(
                  'hidden w-24 font-medium capitalize hover:text-green-500 sm:block',
                  { 'text-green-500': navItem === 'home' }
                )}
              >
                {navItem}
                <hr
                  className={cn(
                    'my-1 h-1 w-full rounded-sm border-0 bg-green-500',
                    { invisible: navItem !== 'home' }
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
          <button
            type='button'
            className='relative right-10 col-span-1 w-fit justify-self-end rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white'
          >
            <span>Login</span>
            <span className='absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent' />
          </button>
        </div> */}
      </div>
      <motion.div
        className='h-1 rounded-full bg-sky-500'
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

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
        className='relative z-50 h-full w-full rounded-full border-none bg-transparent pl-4 pr-20 text-sm text-black placeholder:text-sm placeholder:font-light placeholder:capitalize focus:outline-none focus:ring-0 dark:text-white sm:pl-10 sm:text-base'
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
          aria-hidden='true'
          strokeWidth='2'
          className='h-4 w-4 text-white'
        >
          {['M13 18l6 -6', 'M13 6l6 6'].map((path, idx) => (
            <motion.path
              key={path}
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
