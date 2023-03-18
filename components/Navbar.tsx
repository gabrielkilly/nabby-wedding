import Image from "next/image";
import React, { useState } from "react";


export default function Navbar() {

    const [showShowMobileMenu, setShowMobileMenu]= useState(false);

    const navItems = [
        {
            name: "SCHEDULE",
            url: "/schedule"
        },
        {
            name: "TRAVEL/HOTELS",
            url: "/travel"
        },
        {
            name: "REGISTRY",
            url: "/registry"
        },
        {
            name: "RSVP",
            url: "/rsvp",
            isCta: true
        }
    ]

    const mobileNavSection = showShowMobileMenu ? 
       (
            <nav className="bg-cover">
                <ul className="flex flex-col justify-center items-center">
                    { navItems.map(item => 
                        {
                            if (item.isCta) {
                                return <li key={item.name} className="w-full font-extrabold text-xl text-indigo-500 py-4 px-8 border-t-2 border-sky-300 bg-[#D8DCD0]"><a href={item.url}>{item.name}</a></li>
                            } else {
                                return <li key={item.name} className="w-full font-extrabold text-xl text-indigo-500 py-4 px-8 border-t-2 border-sky-300"><a href={item.url}>{item.name}</a></li>
                            }
                    
                        }
                    ) }
                </ul>
            </nav>
        ) :<></>

    const navIcon = showShowMobileMenu ? "/close.png" : "/menu.svg"

    return (
        <>
        <div className="flex-initial w-100 bg-white border-b-2 border-sky-300">
            <div className="px-8 lg:px-16 flex items-center justify-between">
                <div className="flex items-center justify-between py-4">
                    <img
                        src="/wedding-icon.svg"
                        alt="Gabby & Nayeli Wedding Logo"
                    />
                    <h3 className="ml-4 hidden lg:block">GABBY & NAYELI</h3>
                </div>
                <nav>
                    <ul className="flex items-center justify-between py-4 space-x-8 hidden lg:flex">
                        { navItems.map(item => 
                            {
                                if (item.isCta) {
                                    return <li key={item.name} className="font-extrabold text-xl bg-moss-400 py-2 px-8 rounded"><a href={item.url}><h5 className="text-white">{item.name}</h5></a></li>
                                } else {
                                    return <li key={item.name} className="font-extrabold text-xl text-indigo-500"><a href={item.url}><h5>{item.name}</h5></a></li>
                                }
                            }
                        ) }
                    </ul>
                    <img src={navIcon} className="lg:hidden w-6" onClick={() => setShowMobileMenu(!showShowMobileMenu)}></img>
                </nav>
            </div>
            { mobileNavSection }
        </div>
        </>
    )
}