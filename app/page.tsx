'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  CurentaSvg,
  FloatingNav,
  CurentaAssistance,
} from 'components/home-components';

import { Mobile } from 'components/home-components/mobile';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1800);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  let direction: number;

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    console.log(current);
    if (typeof current !== 'number') return;
    direction = current - scrollYProgress.getPrevious()!;
  });

  return !!isMobile ? (
    <Mobile />
  ) : (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <main
        ref={ref}
        className='relative row-start-2 flex h-[3400px] w-full justify-center'
      >
        <FloatingNav
          ref={ref}
          navItems={['home', 'solutions', 'blog']}
          scrollRange={[0.0002, 0.03]}
        />
        <CurentaSvg
          ref={ref}
          scrollRange={[0.0002, 0.03]}
          animationValues={{
            x: [0, -800],
            y: [0, -230],
            scale: [1, 0.16],
          }}
        />

        <CurentaAssistance ref={ref} />
      </main>
    </div>
  );
}
