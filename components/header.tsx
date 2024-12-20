'use client';

import { cn } from '@/utils/styles';
import { motion } from 'motion/react';
import { useState, Fragment, useEffect } from 'react';
import { z } from 'zod';
import { Button } from './ui/button';
import NavBarMobile from './nav-bar-mobile';
import NavBarDeskTop from './nav-bar-desktop';

export default function Header() {
  return (
    <div className='sticky inset-x-0 top-0 z-50 h-12 w-full bg-white lg:h-20'>
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
