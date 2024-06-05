'use client';
import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import Image from 'next/image';

export function HeroScrollDemo() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
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
        />
      </ContainerScroll>
    </div>
  );
}
