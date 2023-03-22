import React from 'react'
import Navbar, { NavItems } from '@/components/Navbar'
import Head from 'next/head'

const itnSections: ItinerarySectionProps[] = [
  {
    enTitle: "ICEBREAKER",
    esTitle: "ROMPEHELIOS",
    date: "Friday, Semptember 1, 2023",
    meetingPoints: [
      {
        timeRange: "~6:00pm - 10:00pm",
        location: "Location to be determined",
        mapUrl: "https://maps.google.com",
        address: "Address to be provided"
      }
    ],
    color: "bg-gold-200",
    iconPath: "/itinerary/icebreaker-icon.svg"
  },
  {
    enTitle: "CEREMONY",
    esTitle: "CEREMONIA",
    date: "Saturday, Semptember 2, 2023",
    meetingPoints: [
      {
        timeRange: "3:00pm",
        location: "Buses depart / Transportación sale de hoteles",
        mapUrl: "https://maps.google.com",
        address: "Address to be provided"
      },
      {
        timeRange: "4:00pm",
        location: "Ceremony begins at Oblate School Chapel",
        mapUrl: "https://maps.google.com",
        address: "5700 Blanco Rd, San Antonio, TX 78216"
      }
    ],
    color: "bg-[#D8DCD0]",
    iconPath: "/itinerary/ceremony-icon.svg"
  },
  {
    enTitle: "RECEPTION",
    esTitle: "RECEPCIÓN",
    date: "Saturday, Semptember 2, 2023",
    meetingPoints: [
      {
        timeRange: "6:00pm",
        location: "McNay Art Museum",
        mapUrl: "https://maps.google.com",
        address: "6000 N New Braunfels Ave, San Antonio, TX 78209"
      }
    ],
    color: "bg-[#D8E5ED]",
    iconPath: "/itinerary/reception-icon.svg"
  }
]

interface IteneraryMeetingPoint {
  timeRange: string,
  location: string, 
  address: string, 
  mapUrl: string
}

interface ItinerarySectionProps {
  enTitle: string, 
  esTitle: string, 
  date: string, 
  meetingPoints: IteneraryMeetingPoint[]
  color: string, 
  iconPath: string
}

const ItinerarySection = ({enTitle, esTitle, date, meetingPoints, color, iconPath}: ItinerarySectionProps) => {
    return (
      <div className={`flex flex-col ${color} justify-center items-center mt-8 py-8 w-full lg:w-[95%]`}>
        <h5 className='text-gray-800'><img className="inline mr-3" src={iconPath}/>{enTitle} <span className='italic'>/ {esTitle}</span></h5>
        <h4 className='small mt-8 text-gray-800'>{date}</h4>
        <>{meetingPoints.map(point => MeetingPoint(point))}</>
      </div>
    )
  }

const MeetingPoint = (point: IteneraryMeetingPoint) => {
  const {timeRange, location, address, mapUrl} = point
            return (
              <div className='flex flex-col justify-center items-center my-3'>
                <p className='p2 mt-2'><span className='text-gray-800'>{timeRange}</span> <span className='mx-3'>|</span><span className='text-gray-600'>{location}</span></p>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                  <p className='p3 mt-2'>{address}</p>
                  <a href={mapUrl} target="_blank" className='ml-2 link'>View Map</a>
                </div>
              </div>
            )
}

const dressCodeSections: DressCodeSectionProps[] = [
  {
    title: "ICEBREAKER",
    label: "Casual/Semi-formal",
    description: "Casual summer evening attire. "
  },
  {
    title: "CEREMONY & RECEPTION",
    label: "Formal",
    description: "Long dresses and suits. "
  }
]
interface DressCodeSectionProps {
  title: string, 
  label: string, 
  description: string
}

const DressCodeSection = ({title, label, description}: DressCodeSectionProps) =>
  <div className='flex flex-col justify-center items-center my-4'>
    <h5>{title}</h5>
    <div className='flex flex-col lg:flex-row justify-center items-center my-4'>
      <p><strong>{label}</strong></p>
      <p>{description}</p>
    </div>
  </div>

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
          <div className="flex flex-col items-center">
            <div className='flex flex-col justify-center items-center lg:p-8 w-full'>
                <h2>Itinerary</h2>
                {itnSections.map(sections =>  ItinerarySection(sections))}
                <hr className='w-[95%] mt-8 border-t-2 border-solid border-[#D3D3D3]'/>
            </div>
            <div className='flex flex-col justify-center items-center px-4 pt-4 pb-16'>
              <h2 className='mb-3'>Dress Code</h2>
              {dressCodeSections.map(section => DressCodeSection(section))}
            </div>
          </div>
      </main>
    </>
  )
}

