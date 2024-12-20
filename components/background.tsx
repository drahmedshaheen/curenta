'use client';

import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { debounce } from 'lodash';

/**
 * Calculates a factor based on the given lines count, minimum count, and maximum count.
 * The factor is scaled between 0.3 and 1.
 *
 * @param linesCount - The current number of lines.
 * @param minCount - The minimum number of lines.
 * @param maxCount - The maximum number of lines.
 * @returns The calculated factor, scaled between 0.3 and 1.
 */
const calcFactor = (linesCount: number, minCount: number, maxCount: number) =>
  ((linesCount - minCount) / (maxCount - minCount)) * (1 - 0.3) + 0.3;

const calcLinesAnimate = (
  factor: number,
  minNumber: number,
  maxNumber: number
): number => {
  return Math.floor(
    Math.random() * factor * (maxNumber - minNumber + 1) + minNumber
  );
};

export default function Background({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    }, 300);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lines = useMemo(() => {
    const count = {
      horizontal: Math.floor(size.width / 100),
      vertical: Math.floor(size.height / 100),
    };

    const factor = {
      horizontal: calcFactor(count.horizontal, 3, 20),
      vertical: calcFactor(count.vertical, 6, 10),
    };

    return { count, factor };
  }, [size]);

  return (
    <div
      ref={ref}
      className='relative h-[calc(100dvh_-_48px)] w-full overflow-hidden lg:h-[calc(100dvh_-_80px)]'
    >
      <div className='absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-sky-800 from-10% via-sky-500 via-40% to-emerald-500 to-80%'>
        <div className='absolute inset-0 -z-10 h-full w-full'>
          <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]' />
          <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]' />
        </div>

        {new Array(lines.count.horizontal).fill(null).map((_, n) => (
          <motion.div
            key={`${size.height}-${n}`}
            className='absolute -inset-y-16 -z-10 h-[50px] w-[1px] rounded-full bg-gradient-to-t from-white to-transparent'
            style={{ x: 100 * (n + 1) }}
            animate={{ y: size.height + 100 }}
            transition={{
              duration: calcLinesAnimate(lines.factor.horizontal, 3, 20),
              delay: calcLinesAnimate(lines.factor.horizontal, 1, 50),
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: calcLinesAnimate(lines.factor.horizontal, 10, 100),
            }}
          />
        ))}

        {new Array(lines.count.vertical).fill(null).map((_, n) => (
          <motion.div
            key={`${size.width}-${n}`}
            className='absolute -inset-x-16 -z-10 h-[1px] w-[50px] rounded-full bg-gradient-to-l from-white to-transparent'
            style={{ y: 100 * (n + 1) }}
            animate={{ x: size.width + 100 }}
            transition={{
              duration: calcLinesAnimate(lines.factor.vertical, 5, 25),
              delay: calcLinesAnimate(lines.factor.vertical, 1, 50),
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: calcLinesAnimate(lines.factor.vertical, 10, 100),
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
