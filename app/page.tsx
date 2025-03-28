'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import heroImage from '../public/hero-1000x751.webp';
import { motion } from 'motion/react';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

const Background = dynamic(() => import('@/components/background'), {
  ssr: false,
});

export default function Home() {
  return (
    <Background>
      <div className='grid h-full w-full grid-cols-2 place-items-center gap-y-7 px-4 py-10 lg:px-10'>
        <div className='col-span-2 space-y-5 lg:col-span-1 lg:space-y-0'>
          <div className='space-y-5 backdrop-blur-[2px] lg:py-12'>
            <h1 className='w-full text-center text-3xl font-medium leading-tight text-white selection:bg-white selection:text-sky-500 sm:text-4xl md:text-5xl 2xl:text-6xl'>
              AI Empowering Senior Living Communities at Their Core
            </h1>
            <p className='w-full text-center text-xs text-white selection:bg-white selection:text-sky-500 sm:text-base md:text-lg lg:px-10 2xl:text-xl'>
              Curenta’s AI-powered EMR combines advanced compliance tools and
              medication management features to enhance care and reduce errors.
              <strong className='font-semibold'>&nbsp;Ready to upgrade?</strong>
            </p>
          </div>

          <div className='mx-auto flex w-56 max-w-lg items-center justify-center md:w-96'>
            <div className='relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl p-px'>
              <div className='absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]' />
              <div className='relative z-20 flex w-full'>
                <Link
                  href='/meetings'
                  className='inline-block flex-1 items-center justify-center rounded-[0.70rem] border border-white/20 bg-emerald-700 font-medium text-white'
                >
                  <div className='flex h-9 items-center justify-center gap-1 text-sm md:h-12 md:text-lg'>
                    <span className='select-none'>See in Action</span>
                    <SquareArrowOutUpRight className='size-3 md:size-4' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className='col-span-2 h-fit rounded-[calc(var(--radius)_+_3px)] bg-white/50 p-[6px] backdrop-blur-[1px] lg:col-span-1'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'backOut' }}
        >
          <Image
            src={heroImage}
            alt='Hero Image'
            className='select-none rounded-lg'
            priority
          />
        </motion.div>
      </div>
    </Background>
  );
}
