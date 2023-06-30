import React, {useState} from 'react'
import logo from '../../assets/image.png'
import {useNavigate,useLocation } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineCloseCircle,AiOutlineHome, AiOutlineInfoCircle,AiOutlineContacts} from 'react-icons/ai'
import {BiCodeBlock} from 'react-icons/bi'

function NavBar() {
    const [navBar, setNavBar] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className='w-full h-[50px] flex justify-end bg-[#EFFAF0]'>
        {/* TopBar */}
        <div className='text-lg hidden sm:flex'>
            <div className='flex flex-col  justify-center cursor-pointer'>
                <button onClick={() => navigate('/')} className={location.pathname==='/'? 
                'my-auto px-6 bottom-border fromLeft selected' : 'my-auto px-6 bottom-border fromLeft '}>Home</button>
            </div>
            <div className='flex flex-col justify-center cursor-pointer'>
            <button onClick={() => navigate('/about')} className={location.pathname==='/about'? 
                'my-auto px-6 bottom-border fromLeft selected' : 'my-auto px-6 bottom-border fromLeft '}>About me</button>
            </div>

            <div className='flex flex-col justify-center cursor-pointer'>
            <button onClick={() => navigate('/portfolio')} className={location.pathname==='/portfolio'? 
                'my-auto px-6 bottom-border fromLeft selected' : 'my-auto px-6 bottom-border fromLeft '}>Portfolio</button>
            </div>

            <div className='px-6 sm:px-20 flex flex-col justify-center'>
                <button onClick={() => navigate('/contact')} className={location.pathname==='/contact'?
                'border my-auto border-[#43C749] p-[6px] px-4 rounded-lg bg-primary text-white':
                'border my-auto border-black p-[6px] px-4 rounded-lg portfolio-button portfolio-background'}>Contact</button>
            </div>        
        </div>
        {/* Button */}
        <div className='absolute left-0 px-10 top-[10px] sm:hidden'>
        <AiOutlineMenu size={30} onClick={()=> setNavBar(!navBar)} className='cursor-pointer'></AiOutlineMenu>
        </div>
        {console.log(navBar)}
        {/* NavBar */}
        <div className={`fixed bg-black/30 right-0 w-full h-full top-0 transition-all duration-200 ${navBar? 'z-[10] opacity-100' : 'z-[-1] opacity-0'}`}></div>

        <div className={`fixed bg-white w-[200px] h-full top-0 z-20 rounded-r-lg transition-all duration-200 ${navBar? 'left-0' : 'left-[-250px] opacity-0'}`}>
            {/* close button */}
            <div className='flex justify-end p-3'>
                <AiOutlineCloseCircle size={30} onClick={()=> setNavBar(!navBar)} className='cursor-pointer'/>
            </div>
            {/* Links */}
            <div>
                <div className='flex py-4 px-6 cursor-pointer text-lg'>
                    <div className='flex flex-col justify-center pr-2'><AiOutlineHome size={25} /></div>
                    <button onClick={() => navigate('/')} className={location.pathname==='/'? 
                    'my-auto selected-nav' : 'my-auto '}>Home</button>
                </div>
                <div className='flex py-4 px-6 cursor-pointer text-lg'>
                    <div className='flex flex-col justify-center pr-2'><AiOutlineInfoCircle size={25} /></div>

                    <button onClick={() => navigate('/about')} className={location.pathname==='/about'? 
                    'my-auto selected-nav' : 'my-auto '}>About me</button>
                </div>

                <div className='flex py-4 px-6 cursor-pointer text-lg'>
                    <div className='flex flex-col justify-center pr-2'><BiCodeBlock size={25} /></div>

                    <button onClick={() => navigate('/portfolio')} className={location.pathname==='/portfolio'? 
                        'my-auto selected-nav' : 'my-auto '}>Portfolio</button>
                </div>

                <div className='flex py-4 px-6 cursor-pointer text-lg'>
                    <div className='flex flex-col justify-center pr-2'><AiOutlineContacts size={25} /></div>

                    <button onClick={() => navigate('/contact')} className={location.pathname==='/contact'?
                    'my-auto selected-nav' : 'my-auto '}>Contact</button>
                </div>  
            </div>
        </div>

    </div>
  )
}

export default NavBar