import React from 'react'
import Navbar, { NavItems } from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'

interface IteneraryMeetingPoint {
  timeRange: string,
  location: string,
  locationEs?: string, 
  address: string, 
  mapUrl?: string
}

interface ItinerarySectionProps {
  enTitle: string, 
  esTitle: string, 
  date: string, 
  meetingPoints: IteneraryMeetingPoint[]
  color: string, 
  iconPath: string
}

const itnSections: ItinerarySectionProps[] = [
  {
    enTitle: "ICEBREAKER",
    esTitle: "ROMPEHIELIOS",
    date: "Friday, Semptember 1, 2023",
    meetingPoints: [
      {
        timeRange: "6:00pm - 10:00pm",
        location: "Location to be determined",
        locationEs: "Lugar por determinar",
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
        location: "Buses depart",
        locationEs: "Transportación sale de hoteles",
        address: "Address to be provided"
      },
      {
        timeRange: "4:00pm",
        location: "Ceremony begins at Oblate School Chapel",
        locationEs: "Ceremonia comienza en capilla de la escuala Oblate",
        mapUrl: "https://goo.gl/maps/hjTsRqxqPRhA3zJX9",
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
        mapUrl: "https://goo.gl/maps/G337FKqosJfPXJLS7",
        address: "6000 N New Braunfels Ave, San Antonio, TX 78209"
      }
    ],
    color: "bg-[#D8E5ED]",
    iconPath: "/itinerary/reception-icon.svg"
  }
]

interface DressCodeSectionProps {
  title: string, 
  titleEs: string,
  label: string, 
  description: string
}

const dressCodeSections: DressCodeSectionProps[] = [
  {
    title: "ICEBREAKER",
    titleEs: "ROMPEHIELOS",
    label: "Casual/Semi-formal",
    description: "Casual summer evening attire. "
  },
  {
    title: "CEREMONY & RECEPTION",
    titleEs: "CEREMONIA Y RECEPCIÓN",
    label: "Formal",
    description: "Long dresses and suits. "
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
          <div className="flex flex-col items-center">
            <div className='flex flex-col justify-center items-center lg:p-8 w-full'>
                <h2 className='text-center text-gray-700 my-8 lg:my-0'>Itinerary / <span className='italic'>Itinerario</span></h2>
                {itnSections.map(sections =>  ItinerarySection(sections))}
                <hr className='hidden lg:block w-[95%] mt-8 border-t-2 border-solid border-[#D3D3D3]'/>
            </div>
            <div className='flex flex-col justify-center items-center px-4 pt-4 pb-4'>
              <h2 className='text-center text-gray-700 mb-3'>Dress Code / <span className='italic'>Vestimenta</span></h2>
              {dressCodeSections.map(section => DressCodeSection(section))}
            </div>
          </div>
      </main>
    </>
  )
}

const ItinerarySection = ({enTitle, esTitle, date, meetingPoints, color, iconPath}: ItinerarySectionProps) => {
  return (
    <div className={`flex flex-col ${color} justify-center items-start lg:items-center px-4 lg:px-0 lg:mt-8 py-8 w-full lg:w-[95%]`}>
      <div className='flex flex-col lg:flex-row'>
        <img className="w-6 mb-2 lg:mb-0 mr-3" src={iconPath}/>
        <h5 className='text-gray-800'>{enTitle} <span className='italic'>/ {esTitle}</span></h5>
      </div>
      <h4 className='small mt-6 text-gray-800'>{date}</h4>
      <>{meetingPoints.map(point => MeetingPoint(point))}</>
    </div>
  )
}  

const MeetingPoint = (point: IteneraryMeetingPoint) => {
const {timeRange, location, locationEs, address, mapUrl} = point
          return (
            <div className='flex flex-col justify-center lg:items-center mt-6'>
              <p className='text-gray-800 p2 font-extrabold'>{timeRange}</p> 
              <p className='p2 mt-2'>
                <span className='text-gray-600'>{location}</span>
                {locationEs ? <span className='text-gray-600'> / <span className=' italic'> {locationEs}</span></span> : <></>}
              </p>
              <div className='flex flex-col lg:flex-row justify-center lg:items-center'>
                <p className='p3 mt-2'>{address}</p>
                {mapUrl ? <Link href={mapUrl} target="_blank" className='ml-0 lg:ml-2 mt-1 link'>View Map</Link> : <></>}
              </div>
            </div>
          )
}

const DressCodeSection = ({title, titleEs, label, description}: DressCodeSectionProps) =>
  <div className='flex flex-col justify-center items-center my-4'>
    <h5 className='text-gray-800 text-center'>{title} / <span className='italic'>{titleEs}</span></h5>
    <div className='flex flex-col lg:flex-row justify-center items-center my-4'>
      <p className='mr-2 text-gray-700'><strong>{label}</strong></p>
      <p>{description}</p>
    </div>
  </div>

