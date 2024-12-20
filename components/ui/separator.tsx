'use client';

import {
  Separator as SeparatorPrimitive,
  type SeparatorProps as SeparatorPropsPrimitive,
} from '@radix-ui/react-separator';
import { cn } from '@/utils/styles';

type SeparatorProps = SeparatorPropsPrimitive &
  React.RefAttributes<HTMLDivElement>;

const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
);

export default Separator;
