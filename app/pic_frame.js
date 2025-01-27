import React from 'react'
import { Tilt } from "@/components/ui/tilt";


export const PicFrame = () => {
    return (
        <Tilt rotationFactor={8} isRevese>
          <div
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <img
              src='/assets/frame/japan.jpg'
              alt='Ghost in the shell - Kôkaku kidôtai'
              className='h-96 w-full object-cover'
            />
            <div className='p-2'>
              <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
                Tokyo - Japan
              </h1>
              <p className='text-zinc-700 dark:text-zinc-400'>Tokyo Sky Tree</p>
            </div>
          </div>
        </Tilt>
      );
}
