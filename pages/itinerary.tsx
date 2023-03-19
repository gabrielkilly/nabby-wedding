import React from 'react'
import Navbar, { NavItems } from '@/components/Navbar'
import Head from 'next/head'

const sections: ItinerarySectionProps[] = [
  {
    enTitle: "ICEBREAKER",
    esTitle: "ROMPEHELIOS",
    date: "Friday, Semptember 1, 2023",
    timeRange: "~6:00pm - 10:00pm",
    location: "Location to be determined",
    color: "bg-gold-200",
    mapUrl: "https://maps.google.com",
    iconPath: "/itinerary/icebreaker-icon.svg"
  },
  {
    enTitle: "CEREMONY",
    esTitle: "CEREMONIA",
    date: "Saturday, Semptember 2, 2023",
    timeRange: "4:00pm",
    location: "Immaculate Conception Chapel at the Oblate School",
    color: "bg-[#D8DCD0]",
    mapUrl: "https://maps.google.com",
    iconPath: "/itinerary/ceremony-icon.svg"
  },
  {
    enTitle: "RECEPTION",
    esTitle: "RECEPCIÓN",
    date: "Saturday, Semptember 2, 2023",
    timeRange: "6:00pm",
    location: "McNay Art Museum",
    color: "bg-[#D8E5ED]",
    mapUrl: "https://maps.google.com",
    iconPath: "/itinerary/reception-icon.svg"
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
  enTitle: string, esTitle: string, date: string, timeRange: string, location: string, color: string, mapUrl: string, iconPath: string
}

const ItinerarySection = ({enTitle, esTitle, date, timeRange, location, color, mapUrl, iconPath}: ItinerarySectionProps) => {
    return (
      <div className={`flex flex-col ${color} justify-center items-center mt-8 py-8 w-[95%]`}>
        <h5 className='text-gray-800'><img className="inline mr-3" src={iconPath}/>{enTitle} <span className='italic'>/ {esTitle}</span></h5>
        <h4 className='small mt-8 text-gray-800'>{date}</h4>
        <p className='p2 mt-2'><span className='text-gray-800'>{timeRange}</span> <span className='mx-3'>|</span><span className='text-gray-600'>{location}</span></p>
        <a href={mapUrl} target="_blank"><button className='secondary mt-8'>VIEW MAP</button></a>
      </div>
    )
  }