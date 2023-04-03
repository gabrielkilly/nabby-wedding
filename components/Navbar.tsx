import React, { useState } from "react";
import Link from 'next/link'

export const NavItems = {
    itinerary: {
        name: "ITINERARY",
        url: "/itinerary",
        isCta: false
    },
    travel: {
        name: "TRAVEL & HOTELS",
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
        url: "https://gabrielandnayeliwedding.rsvpify.com/rsvp-page-preview/328677?signature=7c81646fb19621db1d2a79a49f1c31771c039764f81e3063b83ab65807acd061",
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
                <ul className="flex flex-col justify-center items-start pb-2">
                    { Object.values(NavItems).map(item => 
                        {
                            const activeStyling = (item.name == tabname) ? "bg-moss-100 text-moss-600" : ""

                            if (item.isCta) {
                                return <li key={item.name} className="font-extrabold text-xl my-4 ml-8 py-2 px-4 bg-moss-400 rounded text-white"><Link href={item.url}>{item.name}</Link></li>
                            } else {
                                return <li key={item.name} className={`w-full font-extrabold text-xl text-indigo-500 py-4 px-8 ${activeStyling}`}><Link href={item.url}>{item.name}</Link></li>
                            }
                    
                        }
                    ) }
                </ul>
            </nav>
        ) :<></>

    const navIcon = showShowMobileMenu ? "/close.png" : "/menu.png"

    return (
        <>
        <div className="flex-initial w-100 bg-white border-b-2 border-sky-300">
            <div className="px-8 lg:px-16 flex items-center justify-between">
                <div className="flex items-center justify-between py-4">
                    <Link href="/"><img
                        src="/wedding-icon.svg"
                        alt="Gabby & Nayeli Wedding Logo"
                    /></Link>
                    <Link href="/"><h3 className="ml-4 hidden lg:block">GABBY & NAYELI</h3></Link>
                </div>
                <nav>
                    <ul className="flex items-center justify-between py-4 space-x-8 hidden lg:flex">
                        { Object.values(NavItems).map(item => 
                            {
                                if (item.isCta) {
                                    return <Link href={item.url}><li key={item.name} className="bg-moss-400 py-2 px-8 rounded"><h5 className="text-white">{item.name}</h5></li></Link>
                                } else if(item.name === tabname) {
                                    return <li key={item.name} className="bg-moss-100 py-1 px-2 rounded"><Link href={item.url}><h5 className="text-moss-600">{item.name}</h5></Link></li>
                                } else {
                                    return <li key={item.name}><Link href={item.url}><h5>{item.name}</h5></Link></li>
                                }
                            }
                        ) }
                    </ul>
                    <img src={navIcon} className="lg:hidden w-8" onClick={() => setShowMobileMenu(!showShowMobileMenu)}></img>
                </nav>
            </div>
            { mobileNavSection }
        </div>
        </>
    )
}