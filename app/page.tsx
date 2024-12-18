'use client';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useRef } from 'react';
import {
  CurentaSvg,
  FloatingNav,
  CurentaAssistance,
} from '@/components/home-components';
import { Header } from '@/components/Header';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  let direction: number;

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current !== 'number') return;
    direction = current - scrollYProgress.getPrevious()!;
  });

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <div
        ref={ref}
        className='relative row-start-2 flex h-[3400px] w-full justify-center'
      >
        <Header />
        <CurentaAssistance ref={ref} />
      </div>
    </div>
  );
}
