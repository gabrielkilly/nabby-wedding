import React, { useState } from "react";
import Link from 'next/link'

export const NavItems = {
    itinerary: {
        name: "ITINERARY",
        url: "/itinerary",
        isCta: false
    },
    travel: {
        name: "TRAVEL/HOTELS",
        url: "/travel",
        isCta: false
    },
    registry: {
        name: "REGISTRY",
        url: "/registry",
        isCta: false
    },
    rsvp: {
        name: "RSVP",
        url: "/rsvp",
        isCta: true
    }
}

interface NavbarProps {
    tabname?: string
}
export default function Navbar({tabname}: NavbarProps) {
    const [showShowMobileMenu, setShowMobileMenu]= useState(false);

    const mobileNavSection = showShowMobileMenu ? 
       (
            <nav className="bg-cover">
                <ul className="flex flex-col justify-center items-center">
                    { Object.values(NavItems).map(item => 
                        {
                            const activeStyling = (item.name == tabname) ? "bg-moss-100 text-moss-600" : ""

                            if (item.isCta) {
                                return <li key={item.name} className="w-full font-extrabold text-xl text-indigo-500 py-4 px-8 border-t-2 border-sky-300 bg-[#D8DCD0]"><Link href={item.url}>{item.name}</Link></li>
                            } else {
                                return <li key={item.name} className={`w-full font-extrabold text-xl text-indigo-500 py-4 px-8 border-t-2 border-sky-300 ${activeStyling}`}><Link href={item.url}>{item.name}</Link></li>
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
                    <Link href="/"><img
                        src="/wedding-icon.svg"
                        alt="Gabby & Nayeli Wedding Logo"
                    /></Link>
                    <a href="/"><h3 className="ml-4 hidden lg:block">GABBY & NAYELI</h3></a>
                </div>
                <nav>
                    <ul className="flex items-center justify-between py-4 space-x-8 hidden lg:flex">
                        { Object.values(NavItems).map(item => 
                            {
                                if (item.isCta) {
                                    return <li key={item.name} className="bg-moss-400 py-2 px-8 rounded"><Link href={item.url}><h5 className="text-white">{item.name}</h5></Link></li>
                                } else if(item.name === tabname) {
                                    return <li key={item.name} className="bg-moss-100 py-1 px-2 rounded"><Link href={item.url}><h5 className="text-moss-600">{item.name}</h5></Link></li>
                                }
                                else {
                                    return <li key={item.name}><Link href={item.url}><h5>{item.name}</h5></Link></li>
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