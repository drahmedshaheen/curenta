'use client';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { observer } from '@legendapp/state/react';
import { useObserve, useObservable, Reactive } from '@legendapp/state/react';

function calculatePercentage(range: [number, number], value: number) {
  const [min, max] = range;
  if (value < min) return 0;
  if (value > max) return 100;
  return Math.round(((value - min) / (max - min)) * 100);
}

function percentageToScale(range: [number, number], percentage: number) {
  const [min, max] = range;
  if (percentage < 0) return min;
  if (percentage > 100) return max;
  return min + (percentage / 100) * (max - min);
}

export const HeroIcon = observer(function Component() {
  const { scrollYProgress } = useScroll();

  const animation = useObservable({ x: 120, y: 0, scale: 1 });

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      if (current > 0.05 || current < 0.2) {
        const percentage = calculatePercentage([0.05, 0.2], current);
        const scale = percentageToScale([0.15, 1], 100 - percentage);
        const x = percentageToScale([-720, 120], 100 - percentage);
        const y = percentageToScale([-230, 0], 100 - percentage);
        animation.set({ x: x, y: y, scale: scale });
      } else if (current < 0.05) {
        animation.set({ x: 0, y: 0, scale: 1 });
      } else if (current > 0.2) {
        animation.set({ x: -100, y: -100, scale: 0.2 });
      }
    }
  });

  return (
    <motion.div
      animate={animation.get()}
      transition={{ bounce: false, duration: 0 }}
      className='fixed'
    >
      <Image
        className='dark:invert'
        src='/curenta.svg'
        alt='Curenta logo'
        width={1000}
        height={100}
        priority
      />
    </motion.div>
  );
});
