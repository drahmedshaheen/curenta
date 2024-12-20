import { CurentaLogo } from '@/icons/curenta-logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NavBarDeskTop() {
  return (
    <div className='hidden h-full items-center justify-between px-32 lg:flex'>
      <Link href='/'>
        <CurentaLogo className='w-44' />
      </Link>

      <Button className='w-32' variant='ghost'>
        Blogs
      </Button>
      <Button
        className='w-32'
        onClick={() =>
          window.location.assign('https://dashboard.curenta.com/login')
        }
      >
        Login
      </Button>
    </div>
  );
}
