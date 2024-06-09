'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-medium'>What Our Clients Say</h1>
        <span className='mt-6 max-w-[1200px] text-center text-lg text-gray-700'>
          Curenta has created the ultimate solution for senior living. In the
          beginning, my team was worried and wanted to continue making phone
          calls. They quickly saw how easy the system was and how much time it
          saved! Curenta’s free connected eMAR is a game-changer!
        </span>
        <div className='my-8 h-px w-5/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' />
      </div>

      <div className='dark:bg-grid-white/[0.05] relative flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];
