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
            name: "RSVP",
            url: "/rsvp"
        },
        {
            name: "TRAVEL/HOTELS",
            url: "/travel"
        },
        {
            name: "REGISTRY",
            url: "/registry"
        }
    ]

    const mobileNavSection = showShowMobileMenu ? 
       (
            <nav className="bg-cover">
                <ul className="flex flex-col justify-center items-center">
                    { navItems.map(item => 
                        <li key={item.name} className="w-full font-extrabold text-xl text-indigo-500 py-4 px-8 border-t-2 border-sky-300"><a href={item.url}>{item.name}</a></li>
                    ) }
                </ul>
            </nav>
        ) :<></>

    const navIcon = showShowMobileMenu ? "/close.png" : "/menu.svg"

    return (
        <>
        <div className="container mx-auto bg-transparent border-b-2 border-t-2 mt-2 lg:my-8 border-sky-300">
            <div className="container flex items-center justify-between px-4">
                <div className="flex items-center justify-between py-4">
                    <img
                        src="/wedding-icon.svg"
                        alt="Gabby & Nayeli Wedding Logo"
                    />
                    <h1 className="font-bold text-xl sm:text-3xl text-indigo-500 ml-4">GABBY & NAYELI</h1>
                </div>
                <nav>
                    <ul className="flex items-center justify-between py-4 space-x-8 hidden lg:flex">
                        { navItems.map(item => 
                            <li key={item.name} className="font-extrabold text-xl text-indigo-500"><a href={item.url}>{item.name}</a></li>
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