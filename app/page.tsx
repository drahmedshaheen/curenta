'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { ScrollContext } from 'contexts/scroll';
import { useRef } from 'react';
import { HeroScrollDemo } from 'components/hero-scroll-demo';
import { CurentaSvg, FloatingNav } from 'components/home-components';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  let direction: number;
  if (scrollYProgress) {
    useMotionValueEvent(scrollYProgress, 'change', (current) => {
      direction = current! - scrollYProgress.getPrevious()!;
    });
  }

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <main className='row-start-2 flex h-[5000px] w-full justify-center'>
        <ScrollContext.Provider value={scrollYProgress}>
          <FloatingNav
            navItems={['home', 'solutions', 'blog']}
            scrollRange={[0.0005, 0.03]}
          />
          <CurentaSvg
            scrollRange={[0.0005, 0.03]}
            animationValues={{
              x: [0, -800],
              y: [0, -230],
              scale: [1, 0.16],
            }}
          />
          <HeroScrollDemo />
        </ScrollContext.Provider>
      </main>
    </div>
  );
}
