'use client';
import dynamic from 'next/dynamic';
import { Calendar } from '@/components/ui/calendar';
import { Card, Separator, Button } from '@/components/ui';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Background = dynamic(() => import('@/components/background'), {
  ssr: false,
});

const generateTimeSlots = (
  startTime: string,
  intervals: number,
  count: number
) => {
  const times = [];

  let time = DateTime.fromFormat(startTime, 'h:mm a');

  for (let i = 0; i < count; i++) {
    times.push(time.toFormat('h:mm a'));
    time = time.plus({ minutes: intervals });
  }

  return times;
};

export default function Meeting() {
  const timeSlots = generateTimeSlots('7:45 pm', 15, 15);

  const timeLocalRef = useRef<HTMLSpanElement | null>(null);
  const timeUSARef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLocalRef.current && timeUSARef.current) {
        timeLocalRef.current.textContent =
          DateTime.local().toFormat('z: hh:mm:ss a');
        timeUSARef.current.textContent = DateTime.local({
          zone: 'America/New_York',
        }).toFormat('z: hh:mm:ss a');
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Background>
      <div className='flex h-full items-center justify-center'>
        <Card className='w-[340px] md:w-[768px]'>
          <Card.Header>
            <Card.Title>Meeting duration</Card.Title>
            <Card.Description>
              Find a time to meet with Curenta.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className='flex h-fit justify-center gap-3 md:h-[470px]'>
              <div className='relative flex flex-col justify-items-stretch gap-3'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  disabled={{ before: new Date(), after: new Date(2025, 0, 4) }}
                />

                <p className='absolute bottom-0 hidden text-sm md:block'>
                  Time Now:
                  <br />
                  <span ref={timeLocalRef}>
                    {DateTime.local().toFormat('z: hh:mm:ss a')}
                  </span>
                  <br />
                  <span ref={timeUSARef}>
                    {DateTime.local({
                      zone: 'America/New_York',
                    }).toFormat('z: hh:mm:ss a')}
                  </span>
                </p>

                <Separator className='block md:hidden' />

                <div className='flex w-full flex-col gap-2 md:hidden'>
                  <h1 className='font-medium'>What time works best?</h1>

                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue
                        placeholder={
                          <p className='text-xs'>
                            Showing times for&nbsp;
                            <strong className='font-medium'>
                              {date
                                ? date.toLocaleString('en-us', {
                                    dateStyle: 'long',
                                  })
                                : new Date()?.toLocaleString('en-us', {
                                    dateStyle: 'long',
                                  })}
                            </strong>
                          </p>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator orientation='vertical' className='hidden md:block' />

              <div className='hidden w-96 flex-col items-start md:flex'>
                <h1 className='font-medium'>What time works best?</h1>
                <p>
                  Showing times for&nbsp;
                  <strong className='font-medium'>
                    {date
                      ? date.toLocaleString('en-us', { dateStyle: 'long' })
                      : new Date()?.toLocaleString('en-us', {
                          dateStyle: 'long',
                        })}
                  </strong>
                </p>

                <div className='mt-2 flex h-[470px] w-full flex-col gap-2 overflow-y-scroll'>
                  {timeSlots.map((slot) => (
                    <Button key={slot} variant='outline'>
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </Background>
  );
}
