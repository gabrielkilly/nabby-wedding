import React from 'react'
import Navbar, { NavItems } from '@/components/Navbar'
import Head from 'next/head'

const sections: ItinerarySectionProps[] = [
  {
    title: "ICEBREAKER / ROMPEHELIOS",
    date: "Friday, Semptember 1, 2023",
    timeRange: "~6:00pm - 10:00pm",
    location: "Location to be determined",
    color: "gold-200",
    mapUrl: "https://maps.google.com",
    iconPath: "/menu.svg"
  }
]

export default function Itinerary() {
  return (
    <>
      <Head>
        <title>Gabriel & Nayeli Wedding | Itinerary</title>
        <meta name="description" content="Iteneray for Gabriel & Nayeli's Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Navbar tabname={NavItems.itinerary.name} />
          <div className="flex flex-col">
            <div className='flex flex-col justify-center items-center p-8'>
                <h2>Itinerary</h2>
                {sections.map(sections =>  ItinerarySection(sections))}
            </div>
          </div>
      </main>
    </>
  )
}

interface ItinerarySectionProps {
  title: string, date: string, timeRange: string, location: string, color: string, mapUrl: string, iconPath: string
}

const ItinerarySection = ({title, date, timeRange, location, color, mapUrl, iconPath}: ItinerarySectionProps) => {
    return (
      <div className={`flex flex-col justify-center items-center w-full bg-${color}`}>
        <h5><img className="inline" src={iconPath}/>{title}</h5>
        <h4 className='small'>{date}</h4>
        <p><p className='p2 gray-800'>{timeRange}</p> <p className='p2'>| {location}</p></p>
        <a href={mapUrl} target="_blank"><button>VIEW MAP</button></a>
      </div>
    )
  }