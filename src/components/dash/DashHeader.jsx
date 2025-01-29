import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import mwfeedsLogo from '../../assets/img/MWFeeds_SVG.svg'

const DashHeader = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ffffff');
    const [linkColor, setLinkColor] = useState('#1f2937');

   
    const handleNav = () => {
        setNav(!nav);
      };
    
    
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } 
            else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    
    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                ? 'fixed w-full h-[65px] shadow-xl z-[100] ease-in-out duration-300 border-b border-black'
                : 'fixed w-full h-[65px] z-[100] border-b border-black'
        }>

            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>

                <div className='flex items-center'> 
                    <Link to='/dash'>
                        <img
                            src={mwfeedsLogo}
                            alt='/'
                            width='45'
                            height='45'
                            className='cursor-pointer rounded-full'
                        />   
                    </Link>
                    <h1 className='ml-4 text-2xl font-bold text-black'>
                        meltwater feeds
                    </h1>  
                </div>

                <div>

                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        
                        <li className='ml-10 text-sm hover:border-b'>
                            <Link to='/dash'>
                                Home
                            </Link>
                        </li>

                        <li className='ml-10 text-sm hover:border-b'>
                            <Link to='/dash/html-to-rss/create'>
                                Create Feed
                            </Link>
                        </li>

                        <li className='ml-10 text-sm hover:border-b'>
                            <Link to='/dash/rss-playground/create'>
                                RSS Playground
                            </Link>
                        </li>

                        <li className='ml-10 text-sm hover:border-b'>
                            <button type='button'>
                                Logout
                            </button>
                        </li>

                    </ul>

                    {/* Hamburger Icon */}
                    <div style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>

                </div>

            </div>

            {/* Mobile Menu */}
            {/* Overlay */}

            <div
                className={
                nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }>

        {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>

                    <div>
                        
                        <div className='flex w-full items-center justify-between'>
            
                            <div className='flex items-center'> 
                                <Link to='/dash'>
                                    <img
                                        src={mwfeedsLogo}
                                        width='90'
                                        height='90'
                                        alt='/'
                                        className='rounded-full'
                                    />
                                </Link>
                                <h1 className='ml-4 text-2xl font-bold text-black'>
                                    meltwater feeds
                                </h1>  
                            </div>

                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>

                        </div>

                        <div className='border-b border-gray-300 my-4'>

                            <p className='w-[85%] md:w-[90%] py-4'>
                                Time Runs Out
                            </p>

                        </div>

                    </div>

                    <div className='py-4 flex flex-col'>

                        <ul className='uppercase'>

                            <Link to='/dash'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>

                            <Link to='/dash/html-to-rss/create'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Create Feed
                                </li>
                            </Link>
                
                            <Link to='/dash/rss-playground/create'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    RSS Playground
                                </li>
                            </Link>

                            <>
                                <button type='button' className='py-4 text-sm'>
                                    Logout
                                </button>
                            </>

                        </ul>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DashHeader
