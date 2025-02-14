import React from 'react';
import { Typewriter } from "@/components/ui/typewriter-text"


import { Earth } from "@/components/animated_comp";
import { Background } from '@/components/backgroundparticles';
import { LampDemo } from '@/components/ui/lamp';
import { GridBackground } from '@/components/ui/glowing-card';
import { TRC } from '@/components/totallyrealchat';
import { PicFrame } from '@/components/pic_frame';
import { PicFrame2 } from '@/components/pic_frame2';
import { PicFrame3 } from '@/components/pic_frame3';
import { Background2 } from '@/components/backgroundparticlev2';
import { Projects } from '@/components/projects';
//import { Marquee } from '@/components/marquee';
import { Experience } from '@/components/experience';
import FooterSection from '@/components/sections/footer/default';

export default function Home() {
  return (
    <div className="h-screen relative overflow-y-scroll">
      <Background />
      
      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-20 relative">
        <div className="flex items-center justify-center w-full h-full ">
          First Section
        </div>
        <div className="flex items-center col-span-1 sm:col-span-2 justify-center w-full h-full ">
          <div className='p-4'>
          <GridBackground />
          </div>
          
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center col-span-1 sm:col-span-2 justify-center w-full h-full ">
          <Earth />
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center col-span-2  justify-center w-full h-full ">
          <Experience />
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center col-span-3 justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          <div className='p-4'>
              <PicFrame />
            </div>
        </div>
        <div className="flex flex-col items-center col-span-4 justify-center w-full h-full ">
          <Typewriter
            text={["PROJECTS"]}
            speed={100}
            loop={true}
            className="text-4xl font-medium text-white"
          />
          <Projects />
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          <div className='p-4'>
              <PicFrame2 />
            </div>
        </div>
        <div className="flex items-center col-span-2 sm:col-span-2 justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 justify-center w-full h-full  row-span-2">
          <div className="w-full h-full max-h-full p-4 rounded-lg">
            <TRC />
          </div>
        </div>
        <div className="flex items-center col-span-1 sm:col-span-2 justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
        </div>
        <div className="flex items-center justify-center w-full h-full ">
          
          <div className='p-4'>
            <PicFrame3 />
          </div>
          
        </div>
        <div className="flex items-center col-span-4 justify-center w-full h-full ">
          
        </div>
      </div>
      
    </div>
  );
}
