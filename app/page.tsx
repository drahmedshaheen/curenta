'use client';
import { HeroScrollDemo } from 'components/hero-scroll-demo';
import { CurentaSvg } from '@/components/curentaSvg';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    console.log(current);
  });

  console.log(scrollYProgress.get());
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <main className='row-start-2 flex h-[5000px] w-full justify-center'>
        <CurentaSvg />

        <HeroScrollDemo />
      </main>
    </div>
  );
}
