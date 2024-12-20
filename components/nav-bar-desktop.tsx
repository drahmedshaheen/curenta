import { CurentaLogo } from '@/icons/curenta-logo';
import { Button } from '@/components/ui/button';

export default function NavBarDeskTop() {
  return (
    <div className='hidden h-full items-center justify-between px-32 lg:flex'>
      <CurentaLogo className='w-44' />
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
