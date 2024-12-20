import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import { Fragment, useState } from 'react';

export default function NavBarMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Button variant='outline' size='icon' onClick={() => setOpen(true)}>
        <MenuIcon className='size-6' />
        <span className='sr-only'>Toggle navigation menu</span>
      </Button>

      {isOpen && (
        <div className='fixed inset-0 w-full'>
          <div className='flex flex-col bg-gray-100 p-4 dark:bg-gray-800'>
            <Button
              variant='ghost'
              size='icon'
              className='self-start'
              onClick={() => setOpen(false)}
            >
              <XIcon className='size-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
            <div className='grid gap-4 py-4'>
              <Link
                href='#'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
