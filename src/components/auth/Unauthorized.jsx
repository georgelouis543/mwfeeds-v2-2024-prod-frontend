import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";


const Unauthorized = () => {
    
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-[400px]'>
                
                <div className='text-center text-[17px]'>
                    Uh Oh! You do not have enough permissions to view this Page! 
                    Please contact pritesh.shetty@meltwater.com / livin.varghese@meltwater.com / george.louis@meltwater.com for more info.
                </div>

                <div className='pt-4'>
                    <button className="flex items-center gap-2 border border-black rounded-md p-2 text-md" onClick={goBack}>
                        <IoMdArrowRoundBack /> Go Back
                    </button>
                </div>

            </div>
            
        </>
    )
}

export default Unauthorized
