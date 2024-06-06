'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from 'utils/cn';
import { observer } from '@legendapp/state/react';

export function CurentaAssistancePhase1({ ref }: { ref: any }) {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        ref={ref}
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Streamline medication <br />
              <span className='mt-1 text-4xl font-bold leading-none md:text-[6rem]'>
                real-time patient info
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/MacBook-Pro-14_-2-1-2048x1368.webp`}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto h-full rounded-2xl object-cover object-left-top'
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

export const ContainerScroll = observer(function Component({
  titleComponent,
  children,
  ref,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  ref: any;
}) {
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [phase, setPhase] = useState(false);

  const rotate = useTransform(scrollYProgress, [0, 0.05], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 0.05], [0, -100]);
  const translateCard = useTransform(
    scrollYProgress,
    [0, 0.05, 0.08],
    [0, 0, -300]
  );

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (current > 0.5) setPhase(true);
    if (current <= 0.5) setPhase(false);
  });

  return (
    <>
      <div className='relative flex h-[60rem] w-[90vw] items-center justify-center p-2 md:h-[80rem] md:p-20'>
        <div
          className={cn(
            'w-full py-10 md:py-40',
            phase ? 'fixed top-[-120]' : 'relative'
          )}
          style={{
            perspective: '1000px',
          }}
        >
          <Header translate={translate} titleComponent={titleComponent} />

          <Card rotate={rotate} scale={scale} translate={translateCard}>
            {children}
          </Card>
        </div>
      </div>
      <motion.span
        translate='yes'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: !phase ? 0 : 100,
          transition: {
            delay: !phase ? 0 : 0.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0,
          },
        }}
        className={cn(
          'right-[150] w-[500] text-4xl font-medium',
          phase ? 'fixed top-[300]' : 'relative'
        )}
      >
        Curenta’s Assisted Living software revolutionizes how facilities manage
        medications, minimize manual work, and provide a single source of truth
        for real-time patient information.
      </motion.span>
    </>
  );
});

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className='mx-auto max-w-5xl text-center'
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateX: translate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className='z-50 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl md:h-[40rem] md:p-6'
    >
      <div className='h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900'>
        {children}
      </div>
    </motion.div>
  );
};
