import React from 'react'

function HomeContent() {

  return (
    <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center'>
            {/* Title */}
            <div className='pt-4 flex justify-center'>
                <h1 className='text-2xl sm:text-3xl font-bold'>About me</h1>
            </div>
            {/* HR */}
            <div className='w-full flex justify-center py-2'>
                <div className='w-[200px] sm:w-[350px] h-[3px] bg-light'>            
                </div>
            </div>
            {/* About me */}
            <div className='max-w-[300px] sm:max-w-[600px] pt-4 text-center'>
                <p className='text-[18px] sm:text-[22px]'>
                Hi, my name is Olariu Alex and i'm glad to meet you! 
                I am currently a Full-Stack Web Developer at the beginning 
                of it's journey. I started working as a backend developer 
                and then shifted towards the full-stack
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeContent