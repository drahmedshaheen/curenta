'use client';
import { FlipWords } from '../ui/flip-words';
import Image from 'next/image';

export const CurentaHeadlines = () => {
  const headlines = [
    'Less Medication Errors',
    'Centralized Medication Information',
    'Integrated Medication Ordering Tool',
    'Mobile Updates To Families',
  ];

  return (
    <div className='flex h-full w-full justify-center gap-12'>
      <div className='relative top-80 flex h-[400px] w-[600px] flex-col gap-5'>
        <h2 className='text-5xl font-bold text-gray-700 dark:text-neutral-400'>
          One Senior Living Software To Get
        </h2>
        <FlipWords headlines={headlines} />
        <span className='w-[400px] text-2xl font-light text-gray-600'>
          Sync, centralize, and streamline your senior living community.
        </span>
      </div>

      <Image
        src={`/Screenshot 2024-06-09 194431.webp`}
        alt='side img'
        height={500}
        width={500}
        className='relative left-5 top-52 rounded-2xl object-cover object-left-top'
        draggable={false}
        priority
      />
    </div>
  );
};
