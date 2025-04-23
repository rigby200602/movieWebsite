import React from 'react'
import { Carousel } from "@material-tailwind/react";
import danny from '/movieWebsite/src/assets/images/danny.jpg'
import digata from '/movieWebsite/src/assets/images/digata.jpg'

const Slideshow = () => {
    return (
        <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={danny}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={digata}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
    )
}

export default Slideshow
