import React from 'react'
import { Tilt } from "@/components/ui/tilt";


export const PicFrame3 = () => {
    return (
        <Tilt rotationFactor={8} isRevese>
          <div
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <img
              src='/assets/frame/Singapore.jpg'
              alt='Ghost in the shell - Kôkaku kidôtai'
              className='h-96 w-full object-cover'
            />
            <div className='p-2'>
              <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
              Singapore
              </h1>
              <p className='text-zinc-700 dark:text-zinc-400'>Gardens by the Bay</p>
            </div>
          </div>
        </Tilt>
      );
}
