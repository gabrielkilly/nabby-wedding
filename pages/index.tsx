import React from 'react'
import Navbar, {NavItems} from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const daysUntilWedding = () => {
    const today = new Date()
    const weddingDate = new Date("09/02/2023")
    const timeDiff = weddingDate.getTime() - today.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  return (
    <>
      <Head>
        <title>Gabriel & Nayeli Wedding | Boda Gabriel y Nayeli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex flex-col lg:h-[100vh]'>
        <Navbar />
          <div className="flex-auto">
            <div className="flex h-full w-full justify-center lg:w-[1/2]">
              <div className="flex flex-col justify-evenly lg:justify-center gap-8 lg:gap-16 2xl:gap-32 items-center lg:w-1/2">
                <div className="block lg:hidden w-full h-52 md:h-96 overflow-hidden relative">
                  <Image 
                    fill 
                    placeholder='blur'
                    src='/home/home-mobile.png' 
                    blurDataURL='/home/home-mobile-blur.png'
                    alt="Gabby and Nayeli Photo" 
                    className='object-cover object-top'
                    />
                </div>
                <div className="flex flex-col max-w-xl px-4 text-center justify-center items-center space-y-8">
                  <h2 className="lg:hidden text-center text-indigo-600">Gabby & Nayeli</h2>
                  <p className="p1 text-center">Thank you for making our event so special!</p>
                  <hr className="w-20 border-moss-300 border-t-1 border-b-2 rounded"/>
                  <p className="p1 text-center italic">Gracias por hacer nuestro evento tan especial!</p>
                </div>
                <div className="flex flex-col justify-around items-center bg-[#D8DCD0] rounded py-8 px-12 lg:py-16 lg:px-28 mx-4 lg:mx-0 mb-4 lg:mb-8 ">
                  <div className="flex flex-col justify-center items-center">
                    <img src="plant.svg" />
                    <h3 className='text-center'>San Antonio, TX</h3>
                    <h4 className='small text-center p1'>September 1-2, 2023</h4>
                  </div>
                  <a href={NavItems.registry.url}><button className="mt-8 primary"><h4 className="text-white">Registry</h4></button></a>
                </div>
              </div>
              <div className="hidden lg:block relative overflow-hidden w-1/2">
                <Image 
                  fill 
                  placeholder='blur'
                  src='/home/home.png' 
                  blurDataURL='/home/home-blur.png'
                  alt="Gabby and Nayeli Photo" 
                  className='object-cover object-top'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}