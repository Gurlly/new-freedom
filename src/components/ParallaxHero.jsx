import React from 'react'
import { Parallax } from 'react-parallax';

import heroImage from '../resources/heroImage.jpg'

const ParallaxHero = ({changeActiveLink}) => {
  return (
    <>
        <Parallax
            bgImage={heroImage}
            bgImageAlt="Hero Background"
            strength={500}
            blur={{ min: -1, max: 5 }}
            bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
            className='w-full h-full absolute top-0 left-0 z-0'
        >
            <div className='w-full h-dvh flex flex-col items-center justify-center'>
                <h2 className='text-shadow text-[3.45rem] md:text-7xl lg:text-[5.5rem] xl:text-8xl font-extrabold text-center text-freedom-white tracking-tight leading-tight md:leading-snug'>Welcome to Freedom!</h2>
                <div className='flex flex-col mt-8 lg:mt-20 lg:flex-row items-center justify-center gap-y-8 gap-x-48'>
                    <a 
                    href="#about" 
                    className='outline-4 outline w-40 md:w-48 lg:w-64 lg:text-xl py-2 md:py-3 text-center outline-freedom-white text-lg text-freedom-white font-extrabold hover:bg-freedom-white hover:text-freedom-gray transition-colors ease-in delay-75 duration-200' 
                    onClick={() => changeActiveLink("about")}
                    >
                    Who we are
                    </a>
                    <button
                    type='button'
                    className='outline-4 outline w-40 md:w-48 lg:w-64 lg:text-xl py-2 md:py-3 text-center outline-freedom-white text-lg text-freedom-white font-extrabold hover:bg-freedom-white hover:text-freedom-gray transition-colors ease-in delay-75 duration-200' 
                    aria-haspopup="dialog" 
                    aria-expanded="false" 
                    aria-controls="four-spiritual-laws" 
                    data-hs-overlay="#four-spiritual-laws"
                    >
                    4SL
                    </button>
                </div>
            </div>
        </Parallax>
    </>
  )
}

export default ParallaxHero