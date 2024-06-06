'use client';
import Image from 'next/image';
import type { RefObject } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';
import { observer, useObservable } from '@legendapp/state/react';

interface CurentaAssistanceProps {
  ref: RefObject<HTMLDivElement>;
}

export const CurentaAssistance = observer(function Component({
  ref,
}: CurentaAssistanceProps) {
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
  });

  const imagePhase = useObservable(1);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current !== 'number') return;

    if (current > 0.25) {
      imagePhase.set(2);
    } else {
      imagePhase.set(1);
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
              [0, 0.04, 0.08, 0.35, 0.5],
              ['auto', 'auto', -100, -100, -5000]
            ),
            position: useTransform(
              scrollYProgress,
              [0, 0.04, 0.06, 0.5, 0.55],
              ['relative', 'relative', 'fixed', 'fixed', 'relative']
            ),
            perspective: '1000px',
          }}
        >
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.05], [100, 0]),
              translateY: useTransform(scrollYProgress, [0, 0.05], [0, -100]),
            }}
            className='mx-auto max-w-5xl text-center'
          >
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Streamline medication <br />
              <span className='mt-1 text-4xl font-bold leading-none md:text-[6rem]'>
                real-time patient info
              </span>
            </h1>
          </motion.div>

          <motion.div
            style={{
              x: useTransform(
                scrollYProgress,
                [0.04, 0.1, 0.2, 0.3],
                [200, 1200, 1200, 150]
              ),
              opacity: useTransform(
                scrollYProgress,
                [0.05, 0.1, 0.2, 0.25, 0.3],
                [0, 1, 1, 0, 1]
              ),
            }}
            className='absolute top-[500px] w-[550px] text-4xl font-medium'
          >
            {imagePhase.get() === 1 && (
              <>
                <h1 className='font-bold text-blue-500'>
                  Synced Patient Records
                </h1>
                <p className='mt-3 text-lg'>
                  View every real-time medication profile update made by
                  pharmacy and prescribers
                </p>
              </>
            )}

            {imagePhase.get() === 2 && (
              <>
                <h1 className='font-bold text-blue-500'>
                  Electronic Medication Administration Records (EMAR)
                </h1>
                <p className='mt-3 text-lg'>
                  Eliminate time-consuming faxes and phone calls with the
                  pharmacy
                </p>
              </>
            )}
          </motion.div>

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
              {imagePhase.get() === 1 && (
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

              {imagePhase.get() === 2 && (
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
        </motion.div>
      </div>
    </div>
  );
});
