'use client';
import { FlipWords } from '../ui/flip-words';

export const CurentaHeader = () => {
  const words = [
    'Less Medication Errors',
    'Centralized Medication Information',
    'Integrated Medication Ordering Tool',
    'Mobile Updates To Families',
  ];

  return (
    <div className='relative left-24 top-80 flex h-[400px] w-[600px] flex-col gap-5'>
      <h2 className='text-5xl font-bold text-gray-700 dark:text-neutral-400'>
        One Senior Living Software To Get
      </h2>
      <FlipWords words={words} />
      <span className='w-[400px] text-2xl font-light text-gray-600'>
        Sync, centralize, and streamline your senior living community.
      </span>
    </div>
  );
};
