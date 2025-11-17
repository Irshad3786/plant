import React from 'react'
import CardOne from './CardOne'

function Content() {
  return (
    <div>
        <div>
            <div className='text-white font-Inter px-5'> 
                <h1 className='text-4xl font-semibold opacity-75 '>Earth’s Exhale</h1>
                <p className='text-xs opacity-75 font-medium'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                <div className='pt-2 flex  gap-4 items-center'>
                    <button class="px-5 py-1 border border-white rounded-md text-white text-sm font-Inter opacity-75">
                    Buy Now
                    </button>
                    <div className='flex text-sm items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#cecece" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"/><path fill="#cecece" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5"/></svg>
                        <p className='font-Indie opacity-80'>Live Demo...</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="min-h-screen flex items-center justify-center p-10">
                <CardOne>
                    <div className="p-6 text-white">
                    <h1 className="text-xl font-semibold">Hello</h1>
                    <p className="opacity-80">This is inside the curved blur card.</p>
                    </div>
                </CardOne>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content