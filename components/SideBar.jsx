import React from 'react'
import { Link } from 'react-router-dom';

const items = [
    { name: "Dashboard", icon: "/icon/dashboard-svgrepo-com-2.svg" , path: "/"},
    { name: "Map", icon: "/icon/location-svgrepo-com-2.svg" , path: "/map"},
    
]

function SideBar() {
    return (
        <div className='hidden md:flex min-h-screen w-32 bg-secondary'>
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-full">
                    {items.map((item, index) => (
                        <Link to={item.path} key={index} className="flex flex-col items-center gap-2 p-4 hover:bg-focus cursor-pointer duration-300">
                            <img src={item.icon} alt="icon" className="w-6 h-auto object-contain" />
                            <text className="text-accent text-sm font-bold">{item.name}</text>
                            <div className='w-3/4 h-[1px] bg-neutral rounded-full'></div>
                        </Link>
                       
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
