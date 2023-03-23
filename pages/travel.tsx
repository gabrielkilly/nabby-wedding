import React from 'react'
import Navbar, { NavItems } from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'

interface TravelSectionProps {
  enTitle: string
  esTitle: string,
  noBorder?: boolean
  children: React.ReactNode
}

interface HotelSectionProps {
  title: string, 
  address: string, 
  phone: string, 
  ctaUrl: string
}

interface DescriptionProps {
  italic?: boolean,
  children: React.ReactNode, 
}

export default function Travel() {
  return (
    <>
      <Head>
        <title>Gabriel & Nayeli Wedding | Travel & Hotels</title>
        <meta name="description" content="Iteneray for Gabriel & Nayeli's Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex flex-col lg:h-[100vh]'>
        <Navbar tabname={NavItems.travel.name}/>
          <div className="flex-auto">
            <div className="flex h-full lg:w-[1/2]">
              <div className="flex flex-col px-16 lg:w-1/2 gap-12">
                <h2 className='mt-8'>Travel/Hotels</h2>
                <TravelSection enTitle='FLIGHT' esTitle='VIAJE'>
                  <h4 className='small'>San Antonio International Airport (SAT)</h4>
                  <Description>
                    The San Antonio International Airport is just a 15min drive to Downtown San Antonio. We recommend flying into SAT and taking an Uber or Lyft to your hotel/accommodations.
                  </Description>
                  <Description italic>
                    El Aeropuerto Internacional de San Antonio está a solo 15 minutos en carro del centro de San Antonio. Recomendamos llegar a este aeropuerto y tomar un Uber o Lyft a su hotel/alojamiento.
                  </Description>
                </TravelSection>
                <TravelSection enTitle='HOTELS' esTitle='HOSPEDAJE'>
                  <HotelSection
                    title='Hotel Valencia Riverwalk'
                    address='150 E Houston St, San Antonio, TX 78205'
                    phone='+1 (855) 596-3387'
                    ctaUrl='https://google.com'/>
                  <HotelSection
                    title='Holiday Inn San Antonio - Riverwalk'
                    address="217 N St Mary's St, San Antonio, TX 78205"
                    phone='+1 (210) 224-2500'
                    ctaUrl='https://google.com'/>
                </TravelSection>
                <TravelSection enTitle='SHUTTLES' esTitle='TRANSPORTACIÓN' noBorder>
                  <Description>
                    Shuttles will be available to transport guests from the hotel, to the events on Saturday, and back. We will have further further details soon.
                  </Description>
                  <Description italic>
                    Tendremos servicio de transporte el sábado para la ceremonia y la fiesta y de regreso al hotel. Actualizaremos esta sección con más detalles pronto.
                  </Description>
                </TravelSection>
              </div>
              <div className="flex flex-col justify-center items-center w-1/2"> 
                <div className="flex flex-col justify-center items-center h-[33.33%] w-full bg-[url('/travel/travel-bg-1.png')] bg-cover bg-no-repeat bg-top"/> 
                <div className="flex flex-col justify-center items-center h-[33.33%] w-full bg-[url('/travel/travel-bg-2.png')] bg-cover bg-no-repeat bg-top"/> 
                <div className="flex flex-col justify-center items-center h-[33.33%] w-full bg-[url('/travel/travel-bg-3.png')] bg-cover bg-no-repeat bg-top"/> 
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const Description = ({italic, children}: DescriptionProps) => <p className={italic ? "italic" : ""}>{children}</p>

const TravelSection = ({esTitle, enTitle, noBorder, children}: TravelSectionProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h5>{enTitle} <span className='italic'>/ {esTitle}</span></h5>
      {children}
      { noBorder ?? <hr className='mt-8 border-t-2 border-solid border-[#D3D3D3]'/> }
    </div>
  )
}

const HotelSection = ({title, address, phone, ctaUrl}: HotelSectionProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <h4 className='small'>{title}</h4>
      <p>{address}</p>
      <p>{phone}</p>
      <Link href={ctaUrl} className="w-max border-2 border-indigo-500 bg-[#EDECF2] text-indigo-500 px-4 py-2 mt-2">View Rooms</Link>
    </div>
  )
}
