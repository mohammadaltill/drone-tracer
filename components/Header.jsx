import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router';


const items = [
    { name: "Dashboard", icon: "/icon/dashboard-svgrepo-com-2.svg", path: "/" },
    { name: "Map", icon: "/icon/location-svgrepo-com-2.svg", path: "/map" },

]

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>
            {/* desktop header */}
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



            {/* mobile header */}
            <div className={`w-full min-h-full ${!isOpen ? "hidden" : ""} fixed bg-black/80 z-[40]`}
            onClick={toggleMenu}></div>
            <div className='w-full flex h-16 bg-primary md:hidden flex-row justify-between items-center px-4'>
                <img src="/Icon/logo.svg" alt="logo" className="w-24 h-auto object-contain" />
                <GiHamburgerMenu className='w-8 h-8 text-accent' onClick={toggleMenu} />
            </div>

            {/* mobile menu */}
            <div className={`w-46 min-h-full fixed top-0 left-0 bg-secondary z-[999] md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <img src="/icon/logo.svg" alt="logo" className="w-40 h-auto object-contain mx-4 p-4" />
                <div className="flex flex-col w-full h-full">
                    {items.map((item, index) => (
                        <Link to={item.path} key={index} className="flex flex-col items-center gap-3 p-1 hover:bg-focus cursor-pointer duration-300">
                            <img src={item.icon} alt="icon" className="w-12 h-auto object-contain" />
                            <text className="text-accent text-sm font-bold">{item.name}</text>
                            <div className='w-1/2 h-[1px] bg-neutral rounded-full mb-2'></div>
                        </Link>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Header
