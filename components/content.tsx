import Image from 'next/image';
import heroImage from '../public/Hero-img.webp';

export default function HeroContent() {
  return (
    <div className='w-full px-10 py-16'>
      <div className='flex h-full w-full items-center justify-between'>
        <div>
          <div className='p-10 backdrop-blur-[2px]'>
            <h1 className='w-[800px] text-center text-6xl font-medium text-white'>
              AI Empowering Senior Living Communities at Their Core
            </h1>
            <br />
            <p className='w-[800px] px-10 text-center text-lg text-white'>
              Curenta’s AI-powered EMR combines advanced compliance tools and
              medication management features to enhance care and reduce errors.
              Ready to upgrade?
            </p>
          </div>
        </div>

        <div className='z-10 rounded-[calc(var(--radius)_+_3px)] bg-white/50 p-[6px] backdrop-blur-[1px]'>
          <Image
            src={heroImage}
            alt=''
            width={750}
            className='rounded-lg'
            placeholder='blur'
            priority
          />
        </div>
      </div>
    </div>
  );
}
