'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { PropsWithChildren } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
) {
  return (
    ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
    outputMin
  );
}

export default function Hero({ children }: PropsWithChildren) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(
      () =>
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      300
    );

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative h-fit w-full overflow-hidden bg-gradient-to-tr from-sky-800 from-10% via-sky-500 via-40% to-emerald-500 to-80% lg:h-[calc(100vh_-_80px)]'>
      <div className='absolute inset-0 h-full w-full'>
        <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]' />
        <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]' />
      </div>

      {new Array(Math.round(size.width / 100) - 1).fill(null).map((_, n) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={n}
          className='absolute -inset-y-16 h-[50px] w-[1px] rounded-full bg-gradient-to-t from-white to-transparent'
          style={{ x: 100 * (n + 1) }}
          animate={{ y: 1000 }}
          transition={{
            duration:
              Math.floor(
                Math.random() *
                  mapRange(Math.round(size.width / 100) - 1, 3, 19, 0.1, 1) *
                  (20 - 3 + 1)
              ) + 3,
            delay:
              Math.random() *
              mapRange(Math.round(size.width / 100) - 1, 3, 19, 0.1, 1) *
              50,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay:
              Math.random() *
              mapRange(Math.round(size.width / 100) - 1, 3, 19, 0.1, 1) *
              100,
          }}
        />
      ))}

      {new Array(Math.round(size.height / 100) - 1).fill(null).map((_, n) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={n}
          className='absolute -inset-x-16 h-[1px] w-[50px] rounded-full bg-gradient-to-l from-white to-transparent'
          style={{ y: 100 * (n + 1) }}
          animate={{ x: 3000 }}
          transition={{
            duration:
              Math.floor(
                Math.random() *
                  mapRange(Math.round(size.height / 100) - 1, 2, 8, 0.1, 1) *
                  (25 - 5 + 1)
              ) + 5,
            delay:
              Math.random() *
              mapRange(Math.round(size.height / 100) - 1, 2, 8, 0.1, 1) *
              50,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay:
              Math.random() *
              mapRange(Math.round(size.height / 100) - 1, 2, 8, 0.1, 1) *
              100,
          }}
        />
      ))}

      {children}
    </div>
  );
}
