import Image from 'next/image';

export const Mobile = () => (
  <div className='m-5 flex h-[100vh] flex-col items-center justify-center gap-10 border border-yellow-500 bg-yellow-200 text-2xl text-slate-700'>
    <span>
      This demo is optimized for PC screens. Please open it on a desktop or
      laptop to view its content.
    </span>

    <Image
      src='/Apex_1717971111820.webp'
      alt='demo img'
      width={1920}
      height={911}
      className='w-[600px] rounded-xl border border-gray-200'
    />
  </div>
);
