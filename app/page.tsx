'use client';

import HeroContent from '@/components/content';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/header'), { ssr: false });
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
