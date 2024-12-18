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

      <div className='dark:bg-grid-white/[0.05] relative flex h-[25rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
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
      'Curenta has created the ultimate solution for senior living. In the beginning, my team was worried and wanted to continue making phone calls. They quickly saw how easy the system was and how much time it saved! Curenta’s free connected eMAR is a game-changer!',
    name: 'Robin Aquino',
    title: 'Regional Facility Director and Care Compliance',
    img: 'Frame-1',
  },
  {
    quote:
      'With over 100 residents in our community, finding technology for senior living has always been challenging. So many companies exist today, but they all seem to do the same thing. After partnering with Curenta, my team’s efficiency has improved tremendously! For the first time, my team can refill residents’ medications online and streamline all communication into one system without a single fax or phone call. Curenta is constantly improving long-term care and I’m glad to have introduced their solutions to my community!',
    name: 'Kimberly Mims',
    title: 'Wellness Director',
    img: 'person',
  },
  {
    quote:
      'We were excited when we found out Curenta built their own eMAR. For years, we used paper charting, which took time to update. Now we replaced it for good! Curenta saves my team valuable time daily, and I’m ecstatic to work with them to innovate our community!	',
    name: 'AnnaMarie Santos-Tabila',
    title: 'Administrator',
    img: 'person',
  },
];
