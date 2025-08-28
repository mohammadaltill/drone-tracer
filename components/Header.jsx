import React from 'react'

function Header() {
    return (

        // desktop
        <div className='w-full hidden h-16 bg-primary md:flex flex-row justify-between items-center px-4'>
            <img src="/icon/logo.svg" alt="sager logo" className="w-32 h-auto object-contain" />
            <div className="flex flex-row items-center gap-4">
                <img src="/icon/capture-svgrepo-com.svg" alt="capture" className="w-6 h-auto object-contain" />
                <img src="/icon/language-svgrepo-com.svg" alt="language" className="w-6 h-auto object-contain" />
                <img src="/icon/bell.svg" alt="bell" className="w-6 h-auto object-contain" />
                <hr className="w-[1px] h-10 rounded-full bg-white" />
                <div className='flex flex-col items-center gap-1'>
                    <div className='flex flex-row items-center gap-2'>
                        <text className="text-accent text-sm">Hello,</text>
                        <text className="text-accent text-sm font-bold">Mohammad Altal</text>
                    </div>
                    <text className="text-xs text-neutral w-full text-start">Techinical Support</text>
                </div>
            </div>
        </div>



        // mobile

    )
}

export default Header
