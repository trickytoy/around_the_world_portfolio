import React from 'react'

import { MarqueeAnimation } from "@/components/ui/marquee-effect";


export const Marquee = () => {
    return (
        <div className="flex flex-col gap-4">
          <MarqueeAnimation
            direction="left"
            baseVelocity={-3}
            className="bg-red-500 text-white py-2"
          >
            MEOW MEOW MEOW MEOW MEOW MEOW
          </MarqueeAnimation>
          <MarqueeAnimation
            direction="right"
            baseVelocity={-3}
            className="bg-orange-500 text-white py-2"
          >
            MEOW MEOW MEOW MEOW MEOW
          </MarqueeAnimation>
        </div>
      );
    }