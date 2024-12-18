import Image from 'next/image';
import heroImage from '../public/Hero-img.webp';
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className='grid h-full grid-cols-2 items-center justify-items-center gap-7 md:px-10'>
      <div className='col-span-2 2xl:col-span-1'>
        <div className='space-y-5 p-10 backdrop-blur-[2px]'>
          <h1 className='w-full text-center text-3xl font-medium leading-tight text-white selection:bg-white selection:text-sky-500 sm:text-4xl md:text-5xl lg:text-6xl'>
            AI Empowering Senior Living Communities at Their Core
          </h1>
          <p className='w-full px-5 text-center text-xs text-white selection:bg-white selection:text-sky-500 sm:text-sm md:px-10 md:text-base lg:text-lg'>
            Curenta’s AI-powered EMR combines advanced compliance tools and
            medication management features to enhance care and reduce errors.
            <strong className='font-semibold'>&nbsp;Ready to upgrade?</strong>
          </p>
        </div>
        <div className='flex w-full justify-center px-10'>
          <button
            type='button'
            className='relative inline-flex h-9 w-56 items-center justify-center gap-3 rounded-md border border-white bg-emerald-600 px-4 py-2 font-medium text-white shadow-[0px_1px_5px_0px_rgba(255_255_255_/_0.5)] transition-all duration-300 hover:shadow-[0px_2px_10px_0px_rgba(255_255_255_/_0.9)] focus:shadow-[0px_2px_10px_0px_rgba(255_255_255_/_0.9)] focus:outline-sky-900 md:w-96'
          >
            <span>See in Action</span>
            <CircleArrowRight />
          </button>
        </div>
      </div>

      <div className='z-10 col-span-2 w-fit rounded-[calc(var(--radius)_+_3px)] bg-white/50 p-[6px] backdrop-blur-[1px] 2xl:col-span-1'>
        <Image
          src={heroImage}
          alt='Hero Image'
          width={750}
          className='rounded-lg'
          placeholder='blur'
          priority
        />
      </div>
    </div>
  );
}
