'use client';
import dynamic from 'next/dynamic';
import HeroContent from '@/components/content';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero>
        <HeroContent />
      </Hero>
    </div>
  );
}
