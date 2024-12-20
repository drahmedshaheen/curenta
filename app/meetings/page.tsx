'use client';
import dynamic from 'next/dynamic';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false });

export default function Meeting() {
  return (
    <Hero>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Curenta</CardTitle>
          <CardDescription>Find a time to meet with Curenta.</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar />
        </CardContent>
      </Card>
    </Hero>
  );
}
