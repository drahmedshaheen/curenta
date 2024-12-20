'use client';
import dynamic from 'next/dynamic';
import { Calendar } from '@/components/ui/calendar';
import { Card, Separator, Button } from '@/components/ui';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';

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

const getTimeString = () =>
  DateTime.local().toFormat("EEEE, MMM dd, yyyy 'at' hh:mm:ss a '['z']'");

export default function Meeting() {
  const timeSlots = generateTimeSlots('7:45 pm', 15, 15);

  const timeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeRef.current) {
        timeRef.current.textContent = getTimeString();
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
        <Card className='h-fit w-fit'>
          <Card.Header>
            <Card.Title>Curenta</Card.Title>
            <Card.Description>
              Find a time to meet with Curenta.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className='flex h-[300px] w-full justify-center gap-3'>
              <Calendar mode='single' selected={date} onSelect={setDate} />
              <Separator orientation='vertical' />

              <div className='flex flex-col items-start'>
                <h1 className='font-medium'>What time works best?</h1>
                <caption>
                  Showing times for&nbsp;
                  <strong className='font-medium'>
                    {date
                      ? date.toLocaleString('en-us', { dateStyle: 'long' })
                      : new Date()?.toLocaleString('en-us', {
                          dateStyle: 'long',
                        })}
                  </strong>
                </caption>
                <p>
                  Time Now:
                  <span ref={timeRef}>{getTimeString()}</span>
                </p>
                <div className='flex h-96 w-full flex-col gap-2 overflow-y-scroll'>
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
