'use client';
import Image from 'next/image';
import { forwardRef, useState, type RefObject } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  MotionValue,
} from 'framer-motion';

import { CurentaHeadlines } from './curentaHeadlines';

interface CurentaAssistanceProps {
  // Define any other props you might have
}

export const CurentaAssistance = forwardRef<HTMLDivElement>((_, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLDivElement>,
    layoutEffect: false,
  });

  const [phase, setPhase] = useState(1);
  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current !== 'number') return;

    if (scrollYProgress.get() >= 0.351) {
      setPhase(3);
    } else if (current > 0.25) {
      setPhase(2);
    } else {
      setPhase(1);
    }
  });

  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='relative flex h-[60rem] w-[90vw] items-center justify-center p-2 md:h-[80rem] md:p-20'>
        <motion.div
          className='w-full py-10 md:py-40'
          style={{
            top: useTransform(
              scrollYProgress,
              [0, 0.04, 0.05, 0.35, 0.351],
              ['auto', 'auto', -100, -100, 1550]
            ),
            position: useTransform(
              scrollYProgress,
              [0, 0.04, 0.05, 0.35, 0.351],
              ['relative', 'relative', 'fixed', 'fixed', 'relative']
            ),
            perspective: '1000px',
          }}
        >
          <Header scrollYProgress={scrollYProgress} />

          <Description scrollYProgress={scrollYProgress} phase={phase} />

          <Children scrollYProgress={scrollYProgress} phase={phase} />

          {phase >= 3 && <CurentaHeadlines />}
        </motion.div>
      </div>
    </div>
  );
});

const Header = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => (
  <motion.div
    style={{
      opacity: useTransform(scrollYProgress, [0, 0.05], [100, 0]),
      translateY: useTransform(scrollYProgress, [0, 0.05], [0, -100]),
    }}
    className='mx-auto max-w-5xl text-center'
  >
    <h1 className='mt-10 text-4xl font-semibold text-black dark:text-white'>
      A ONE-STOP SOLUTION FOR <br />
      <span className='text-5xl font-bold leading-none'>
        ALL YOUR RESIDENT INFORMATION
      </span>
    </h1>
  </motion.div>
);

const Description = ({
  scrollYProgress,
  phase,
}: {
  scrollYProgress: MotionValue<number>;
  phase: number;
}) => {
  return (
    <motion.div
      style={{
        x: useTransform(
          scrollYProgress,
          [0.04, 0.1, 0.2, 0.3, 0.35, 0.351],
          [200, 1200, 1200, 150, 150, -20]
        ),
        opacity: useTransform(
          scrollYProgress,
          [0.05, 0.1, 0.2, 0.25, 0.3],
          [0, 1, 1, 0, 1]
        ),
      }}
      className='absolute top-[500px] w-[550px] text-4xl font-medium'
    >
      {phase === 1 && (
        <>
          <h1 className='font-bold text-blue-500'>Synced Patient Records</h1>
          <p className='mt-3 text-lg'>
            View every real-time medication profile update made by pharmacy and
            prescribers
          </p>
        </>
      )}

      {phase >= 2 && (
        <>
          <h1 className='font-bold text-blue-500'>
            Electronic Medication Administration Records (EMAR)
          </h1>
          <p className='mt-3 text-lg'>
            Eliminate time-consuming faxes and phone calls with the pharmacy
          </p>
        </>
      )}
    </motion.div>
  );
};

const Children = ({
  scrollYProgress,
  phase,
}: {
  scrollYProgress: MotionValue<number>;
  phase: number;
}) => {
  return (
    <motion.div
      style={{
        rotateX: useTransform(scrollYProgress, [0, 0.05], [50, 0]),
        translateX: useTransform(
          scrollYProgress,
          [0, 0.05, 0.1, 0.2, 0.3],
          [0, 0, -300, -300, 300]
        ),
        scale: useTransform(scrollYProgress, [0, 0.05], [1.05, 1]),
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className='z-50 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl md:h-[40rem] md:p-6'
    >
      <div className='h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900'>
        {phase === 1 && (
          <Image
            src={`/MacBook-Pro-14_-2-1-2048x1368.webp`}
            alt='hero'
            height={720}
            width={1400}
            className='mx-auto rounded-2xl object-cover object-left-top'
            draggable={false}
            priority
          />
        )}

        {phase >= 2 && (
          <Image
            src={`/MacBook-Pro-14_-1-2048x1368.webp`}
            alt='hero'
            height={720}
            width={1400}
            className='mx-auto rounded-2xl object-cover object-left-top'
            draggable={false}
            priority
          />
        )}
      </div>
    </motion.div>
  );
};
