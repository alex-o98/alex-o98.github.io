import React from 'react'

function WorkExperience() {
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
                    <h2 className='text-lg font-bold text-left'>Work Experience</h2>
                </div>
                {/* HR */}
                <div className='w-full flex justify-center py-2'>
                    <div className='w-[240px] h-[3px] bg-primary'/> 
                </div>
                </div>
                {/* Content */}
                <div className='pb-4 text-sm'>                
                  <ul className='list-disc'>
                    <li>
                      <h2 className='font-bold text-lg'>Endava 
                      <span className='font-normal text-[17px]'>{` (Jan 2022 - Present)`}</span></h2>
                      <div>
                      <ul className='ml-4'>
                        <li className='text-[16px] font-semibold my-1'>Role:
                          <span className='font-normal text-[16px]'> Senior Technician</span>
                        </li>
                        <li className='text-[16px] font-semibold my-1'>Technology:
                          <span className='font-normal text-[16px]'> Python</span>
                        </li>
                        <li className='text-[16px] font-semibold my-1'>Projects:
                          <div className='ml-4 font-normal '>
                            <li className='my-2'>
                            - Creating an API so that any crypto website can link to a
                              main one in order to see each other's balance and to be
                              able to deposit, withdraw, and see the history transactions
                              between one another
                            </li>
                            <li className='my-2'>
                            - Bench Activities
                            </li>
                          </div>
                        </li>
                      </ul>
                      </div>
                    </li>

                    <li>
                      <h2 className='font-bold text-lg'>Continental Automotive Romania 
                      <span className='font-normal text-[17px]'>{` (Jul 2019 - Sept 2021)`}</span></h2>
                      <div>
                      <ul className='ml-4'>
                        <li className='text-[16px] font-semibold my-1'>Role:
                          <span className='font-normal text-[16px]'> Intern</span>
                        </li>
                        <li className='text-[16px] font-semibold my-1'>Technology:
                          <span className='font-normal text-[16px]'> Python, C++, Linux</span>
                        </li>
                        <li className='text-[16px] font-semibold my-1'>Projects:
                          <div className='ml-4 font-normal'>
                            <li className='my-2'>
                            - Created a Neural Network to detect leaves from trees or
                            plants (In summer practice)
                            </li>
                            <li className='my-2'>
                            - Took part in an intern competition called CARINO, for
                            predicting the state of the surface on roadways (2nd place)
                            </li>
                            <li className='my-2'>
                            - Helped in Yocto and AUTOSAR projects
                            </li>
                          </div>
                        </li>
                      </ul>
                      </div>
                    </li>                    

                  </ul>
                </div>
            </div>
    </div>
    </div>
    </div>  )
}

export default WorkExperience