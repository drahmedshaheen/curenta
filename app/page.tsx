'use client';
import { useScroll } from 'framer-motion';
import { ScrollContext } from 'contexts/scroll';
import { useRef } from 'react';
import { FloatingNav } from 'components/navbar';
import { CurentaSvg } from 'components/curentaSvg';
import { HeroScrollDemo } from 'components/hero-scroll-demo';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <main className='row-start-2 flex h-[5000px] w-full justify-center'>
        <ScrollContext.Provider value={scrollYProgress}>
          <CurentaSvg scrollRange={[0.0005, 0.03]} />
          <FloatingNav scrollRange={[0.0005, 0.03]} />
          <HeroScrollDemo />
        </ScrollContext.Provider>
      </main>
    </div>
  );
}
