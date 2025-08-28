import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function DashBoard() {
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden">
            <div className="flex flex-col w-full h-full container">
                <Header />
                <div className="flex flex-row w-full h-full">
                    <SideBar />
                </div>
            </div>

        </div>)
}

export default DashBoard
