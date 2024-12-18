'use client';

import Header from '@/components/header';
import Image from 'next/image';
import heroImage from '../public/Hero-img.webp';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero>
        <div className='absolute right-40 top-20 z-10 rounded-[calc(var(--radius)_+_3px)] bg-white/50 p-[6px] backdrop-blur-[1px]'>
          <Image
            src={heroImage}
            alt=''
            width={750}
            className='rounded-lg'
            placeholder='blur'
            priority
          />
        </div>
      </Hero>
    </div>
  );
}
