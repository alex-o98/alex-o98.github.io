import React from 'react'

function SkillsAndTraits() {
  return (
    <div className='w-full flex justify-center'>
        <div className='m-[50px] w-[1000px] flex flex-col min-[750px]:flex-row justify-between'>
            <div className=' bg-[#e0efe1] rounded-lg my-2 shadow-lg '>
                {/* Skills */}
                <div className='px-10 py-3 flex flex-col '>
                {/* Header */}
                    <div>
                    {/* Title */}
                        <div className='pt-4 flex justify-center'>
                            <h2 className='text-lg font-bold text-left'>Technical Skills</h2>
                        </div>
                    {/* HR */}
                        <div className='w-full flex justify-center py-2'>
                            <div className='w-[240px] h-[3px] bg-primary'/> 
                        </div>
                    </div>
                    {/* Skills */}
                    <div className='pb-4 text-sm min-[860px]:w-[300px]'>       
                        <ul>
                            <li className='m-2'>
                                <div class="flex justify-between mb-1">
                                    <span class="text-base font-medium ">Python</span>
                                </div>    
                                <div class="w-full rounded-full h-2.5 bg-gray-600">
                                    <div class="bg-primary h-2.5 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </li>
                            <li className='m-2'>
                                <div class="flex justify-between mb-1">
                                    <span class="text-base font-medium ">React</span>
                                </div>    
                                <div class="w-full rounded-full h-2.5 bg-gray-600">
                                    <div class="bg-primary h-2.5 rounded-full" style={{width: '50%'}}></div>
                                </div>
                            </li>
                            <li className='m-2'>
                                <div class="flex justify-between mb-1">
                                    <span class="text-base font-medium ">SQL</span>
                                </div>    
                                <div class="w-full rounded-full h-2.5 bg-gray-600">
                                    <div class="bg-primary h-2.5 rounded-full" style={{width: '50%'}}></div>
                                </div>
                            </li>
                            <li className='m-2'>
                                <div class="flex justify-between mb-1">
                                    <span class="text-base font-medium ">Java</span>
                                </div>    
                                <div class="w-full rounded-full h-2.5 bg-gray-600">
                                    <div class="bg-primary h-2.5 rounded-full" style={{width: '60%'}}></div>
                                </div>
                            </li>
                            <li className='m-2'>
                                <div class="flex justify-between mb-1">
                                    <span class="text-base font-medium ">GIT</span>
                                </div>    
                                <div class="w-full rounded-full h-2.5 bg-gray-600">
                                    <div class="bg-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0efe1] rounded-lg my-2 shadow-lg'>
                <div className='px-10 py-3 flex flex-col h-full'>
                {/* Header */}
                    <div>
                    {/* Title */}
                        <div className='pt-4 flex justify-center'>
                            <h2 className='text-lg font-bold text-left'>Personal Skills</h2>
                        </div>
                    {/* HR */}
                        <div className='w-full flex justify-center py-2'>
                            <div className='w-[240px] h-[3px] bg-primary'/> 
                        </div>
                    </div>
                    {/* Personal skills */}
                    <div className='flex flex-col justify-center my-auto min-[860px]:w-[300px]'>
                        <ul className='list-disc px-2'>
                            <li className='py-1 px-2'> Problem solving</li>
                            <li className='py-1 px-2'> Communication </li>
                            <li className='py-1 px-2'> Team player </li>
                            <li className='py-1 px-2'> Attention to detail </li>
                            <li className='py-1 px-2'> Creative </li>
                            <li className='py-1 px-2'> Time management </li>
                            <li className='py-1 px-2'> Adaptable </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>        
    </div>
      )
}

export default SkillsAndTraits