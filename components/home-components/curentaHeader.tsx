'use client';
import { FlipWords } from '../ui/flip-words';

export const CurentaHeader = () => {
  const words = ['Better', 'Cute', 'Beautiful', 'Modern'];

  return (
    <div className='flex h-[800px] w-[500px] flex-col items-start justify-center gap-5'>
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
