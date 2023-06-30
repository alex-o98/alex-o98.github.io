import React from 'react'
import personal_image from '../../assets/personal_image3.jpg'
import {AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub} from 'react-icons/ai'
import {useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-[300px] bg-hero flex justify-between'>

        <div className='w-full py-5 flex justify-center'>
            {/* Left side (Content) */}
            <div className='flex flex-col justify-center px-10 md:px-20'>
                {/* Title */}
                <div>
                <h1 className='text-3xl font-bold'>I'm Olariu Alex</h1>
                </div>
                {/* Description */}
                
                {/* Buttons */}
                <div className='pt-2'>
                    <div className='flex'>
                    <div className='pr-2'>
                        <button onClick={()=> navigate('/contact')} className='border text-white my-auto bg-primary p-2 px-6 rounded-lg'>Contact me</button>
                    </div>
                    <div className='flex flex-col justify-center px-2'>
                        <a onClick={()=> navigate('/portfolio')} className='underline text-secondary cursor-pointer'>Portfolio</a>
                    </div>
                    </div>
                </div>
                {/* SM icons */}
                <div className='flex pt-2'>
                    <div className='cursor-pointer pr-2'>
                        <a href='https://www.linkedin.com/in/olariu-alex-3223788a/'><AiOutlineLinkedin size={30}/></a>
                    </div>
                    <div className='cursor-pointer px-2'>
                        <a href='https://www.instagram.com/alex.o981/'><AiOutlineInstagram size={30}/></a>
                    </div>
                    <div className='cursor-pointer px-2'>
                        <a href='https://github.com/alex-o98'><AiOutlineGithub size={30}/></a>
                    </div>
                </div>
            </div>
             {/* Right side (Image) */}
            <div className='hidden sm:flex flex-col justify-center '>
                <img className='overflow-hidden rounded-[25%] aspect-square max-w-[180px] max-h-[180px] md:min-w-[260px] md:min-h-[260px]' src={personal_image}></img>
            </div>
        </div>
    </div>
  )
}

export default Hero