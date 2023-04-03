import React from 'react'
import Navbar, { NavItems } from '../components/Navbar'
import Head from 'next/head'

export default function Registry() {
  return (
    <>
      <Head>
        <title>Gabriel & Nayeli Wedding | Registry</title>
        <meta name="description" content="Iteneray for Gabriel & Nayeli's Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Navbar tabname={NavItems.registry.name} />
          <div className='flex flex-col justify-center px-16 gap-y-8 w-full'>
            <h2 className='mt-8'>Registry</h2>
            <p>Most of all, we’re excited to celebrate with you! If you’re able to and would like to gift us anything, you can contribute to our Honeymoon and Homegoods fund below!</p>
            <p className='italic'>!Lo que mas nos emociona es poder celebrar contigo! Pero si nos quieres dejar un detalle, puedes contribuír a nuestro fondo de luna de miel o nuestro fondo de artículos para nuestro hogar.</p>
          </div>
      </main>
    </>
  )
}


interface FundProps {
  title: string, 
  imagePath: string
  fundPercentage: number,
  ctaPath: string
}

const Fund = ({title, imagePath, fundPercentage, ctaPath}: FundProps) => {
  return (
    <div className='w-24 flex flex-col justify-center'>
      <h5 className='text-[#3F3F3F]'>{title}</h5>
      <img className='w-full h-auto' src={imagePath}/>
      <a href={ctaPath} className="btn">Contribute</a>
      
    </div>
  )
}