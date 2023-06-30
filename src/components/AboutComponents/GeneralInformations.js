import React from 'react'

function GeneralInformations() {
  return (
    <div className='w-full flex justify-center'>
        <div className='m-[50px] w-[1000px] '>
            <div className='bg-[#e0efe1] flex flex-col min-[750px]:flex-row justify-between rounded-lg shadow-lg'>

            {/* Left side */}
            <div className='w-full px-10 py-3 flex flex-col'>
                {/* Header */}
                <div>
                {/* Title */}
                <div className='pt-4 flex justify-center'>
                    <h2 className='text-lg font-bold text-left'>About</h2>
                </div>
                {/* HR */}
                <div className='w-full flex justify-center py-2'>
                    <div className='w-[240px] h-[3px] bg-primary'/> 
                </div>
                </div>
                {/* Paragraph */}
                <div className='pb-4 text-sm'>                
                My name is Olariu Alex and I'm a self learner full-stack web developer at the beginning.
                I worked as a backend developer for a year and then shifted towards the full-stack, 
                as I see that this area fits me better. I am a perfectionist with a high attention to
                detail, a very creative one, someone who has good time management, and maybe one of my traits
                that helped me move to full-stack is I am a very adaptable person.
                </div>
            </div>

            {/* Middle Break */}
            <div className='flex justify-center'>
                <div className='w-[calc(100%-20px)] h-[2px] 
                                min-[750px]:w-[2px] min-[750px]:h-[calc(100%-20px)] 
                                my-2 bg-black'>
                    .
                </div>
            </div>
            {/* Right side */}
            <div className='w-full px-10 py-3 flex flex-col'>
                {/* Header */}
                <div>
                {/* Title */}
                <div className='pt-4 flex justify-center'>
                    <h2 className='text-xl font-bold'>General information</h2>
                </div>
                {/* HR */}
                <div className='w-full flex justify-center py-2'>
                    <div className='w-[240px] h-[3px] bg-primary'/> 
                </div>
            </div>
            <div className='flex text-[14px]'>
                <ul className='my-auto  pr-5'>
                    <li className='flex py-2 font-bold'>
                        Age
                    </li>
                    <li className='flex py-2 font-bold'>
                        Phone
                    </li>
                    <li className='flex py-2 font-bold'>
                        Email
                    </li>
                    <li className='flex py-2 font-bold'>
                        Address
                    </li>
                </ul>
                <ul className='my-auto pl-5'>
                    <li className='py-2'>
                    24
                    </li>
                    <li className='py-2'>
                    +40 735 516 044
                    </li>
                    <li className='py-2'>
                    olariu.alex15@gmail.com
                    </li>
                    <li className='py-2'>
                    Timisoara, Romania
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default GeneralInformations