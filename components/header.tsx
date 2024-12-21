'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Button from './ui/button';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import { CurentaLogo } from '@/icons/curenta-logo';

export default function Header() {
  return (
    <div className='sticky inset-x-0 top-0 z-30 h-12 w-full bg-white lg:h-20'>
      <NavBarMobile />
      <NavBarDeskTop />

      <motion.div
        className='h-1 rounded-full bg-sky-500'
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

function NavBarDeskTop() {
  return (
    <div className='hidden h-full items-center justify-between px-32 lg:flex'>
      <Link aria-label='Curenta' href='/'>
        <CurentaLogo className='w-44' />
      </Link>

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
    </div>
  );
}

function NavBarMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='flex h-full items-center justify-between px-5 lg:hidden'>
      <Link aria-label='Curenta' href='/'>
        <CurentaLogo className='w-32' />
      </Link>

      <Button variant='outline' size='icon' onClick={() => setOpen(true)}>
        <MenuIcon className='size-6' />
        <span className='sr-only'>Toggle navigation menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='menu'
            className='fixed inset-0 w-full'
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ ease: 'easeOut' }}
          >
            <div className='flex flex-col bg-white p-2 text-slate-800'>
              <Button
                variant='ghost'
                size='icon'
                className='self-start'
                onClick={() => setOpen(false)}
              >
                <XIcon className='size-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
              <div className='grid gap-4 py-2 pl-6'>
                <Link
                  href='#'
                  className='flex w-full items-center py-2 text-lg font-semibold'
                  prefetch={false}
                >
                  Blogs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
