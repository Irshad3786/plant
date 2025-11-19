import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import PlantCard from './PlantCards/PlantCard'

function Content() {
  return (
    <div>
        <div className='md:flex md:justify-between '>
            <div className='text-white font-Inter px-5 md:pt-12 lg:pt-24'> 
                <h1 className='text-4xl font-semibold opacity-75 lg:text-8xl'>Earth’s Exhale</h1>
                <p className='text-xs opacity-75 font-medium lg:text-lg'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural<br/> environment and its essential role in sustaining life.</p>
                <div className='pt-2 flex  gap-4 items-center'>
                    <button class="px-5 py-1 border border-white rounded-md text-white text-sm font-Inter opacity-75 lg:text-xl">
                    Buy Now
                    </button>
                    <div className='flex text-sm items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 lg:h-14 lg:w-14' viewBox="0 0 24 24"><path fill="#cecece" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"/><path fill="#cecece" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5"/></svg>
                        <p className='font-Indie opacity-80 lg:text-lg' >Live Demo...</p>
                    </div>
                </div>
                <div className='lg:pt-24'>
                    <CardTwo>
                        <div >
                        
                            <div className='pt-7 pl-14 lg:pl-24 lg:pt-9'>
                                <h2 className="text-white text-xs lg:text-lg">Ronnie Hamill</h2>
                                <div className="text-yellow-400 text-xs flex  items-center gap-0.5">★ ★ ★ ★ <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"><path fill="#FACC15" d="M12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z"/></svg></div>
                            </div>

                            <p className="text-gray-300 mt-3 text-[10px] px-2 lg:text-[14px] lg:pt-2 lg:px-6">
                                    I can't express how thrilled I am with my new natural plants!
                                    They bring such a fresh and vibrant energy to my home.
                                </p>
                        </div>
                    </CardTwo>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center w-full pt-16 md:pt-8 md:pr-10 lg:pr-12 ">
                <CardOne>
                <img
                    src="./firstplant.png"
                    className="w-[250px] -mt-14 lg:w-[350px] lg:-mt-20"
                />
                <div className='lg:pl-6'>
                    <p className="text-sm text-white/70 mt-2 lg:text-lg">Indoor Plant</p>

                    <h1 className="text-sm font-semibold lg:text-xl text-white flex  items-center gap-10 opacity-75 lg:gap-24" >
                        Aglaonema Plant
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-2 h-3 lg:w-6 lg:h-6' viewBox="0 0 7 16"><path fill="#ffff" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg>
                    </h1>

                    <button className="mt-2 px-3 py-1 border lg:text-lg border-white text-white rounded-lg opacity-90">
                        Buy Now
                    </button>
                </div>

                <div className='flex justify-center pt-1'>
                    <svg  className='opacity-80 w-4 h-4 lg:w-10 lg:h-10' viewBox="0 0 60 12" xmlns="http://www.w3.org/2000/svg" fill="none">
 
                        <rect x="0" y="2" width="24" height="8" rx="4" fill="white"/>


                        <circle cx="36" cy="6" r="6" fill="white"/>

                        
                        <circle cx="54" cy="6" r="6" fill="white"/>
                        </svg>

                </div>
                </CardOne>

                </div>
            </div>
        </div>

        <div>
            <div className='flex justify-center items-center lg:mt-20'>
                <div className='flex relative'>
                    <div className='pt-3 absolute lg:pt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 66" fill="none">
                        <path opacity="0.5" d="M2.5 0V43.5C2.5 54.5457 11.4543 63.5 22.5 63.5H64"
                            stroke="url(#grad)" stroke-width="5"/>
                        <defs>
                            <linearGradient id="grad" x1="0" y1="2.5" x2="68.5" y2="71.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FBD300"/>
                            <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                        </svg>

                    </div>
                    <h1 className='text-white text-2xl font-semibold px-2 py-2 lg:text-4xl'>Our Trendy plants</h1>
                    <div className='pt-2 absolute right-0 lg:top-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 66" fill="none">
                        <path opacity="0.5" d="M61.5 65.5V22.5C61.5 11.4543 52.5457 2.50001 41.5 2.50001L1.09971e-05 2.50001" stroke="url(#paint0_linear_11_52)" stroke-width="5"/>
                        <defs>
                        <linearGradient id="paint0_linear_11_52" x1="0.500012" y1="2.50001" x2="68.5" y2="71.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBD300"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div className='px-6 py-10'>
                    <PlantCard 
                    reverse={false}
                    title="For Your Desks Decorations"
                    description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
                    price={599}
                    image="/plantone.png"
                    />
                </div>

                <div className='px-6 py-10'>
                    <PlantCard 
                    reverse={true}
                    title="For Your Desks Decorations"
                    description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
                    price={399}
                    image="/planttwo.png"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content