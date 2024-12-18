'use client';

import { cn } from '@/utils/styles';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='relative w-[550px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6'
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              />
              <span className='relative z-20 text-sm font-normal leading-[1.6] text-gray-400'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex'>
                <Image
                  src={`/${item.img}.png`}
                  alt='hero'
                  height={44}
                  width={44}
                  className='mr-5 size-11 rounded-full object-cover object-left-top'
                  draggable={false}
                  priority
                />

                <span className='flex flex-col gap-1'>
                  <span className='text-sm font-bold leading-[1.6] text-gray-400'>
                    {item.name}
                  </span>
                  <span className='text-sm font-bold leading-[1.6] text-gray-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
