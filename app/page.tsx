'use client';

import Header from '@/components/header';
import HeroContent from '@/components/content';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero>
        <HeroContent />
      </Hero>
    </div>
  );
}
