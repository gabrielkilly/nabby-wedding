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
          <div className='flex flex-col justify-center px-8 lg:px-16 gap-y-8 w-full'>
            <h2 className='mt-8'>Registry</h2>
            <p>Most of all, we’re excited to celebrate with you! If you’re able to and would like to gift us anything, you can contribute to our Honeymoon and Homegoods fund below!</p>
            <p className='italic'>!Lo que mas nos emociona es poder celebrar contigo! Pero si nos quieres dejar un detalle, puedes contribuír a nuestro fondo de luna de miel o nuestro fondo de artículos para nuestro hogar.</p>
            <div className='flex'>
              {funds.map(fund => Fund(fund))}
            </div>
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

const funds: Array<FundProps> = [
  {
    title: "HONEYMOON FUND",
    imagePath: "/registry/honeymoon.png",
    fundPercentage: 10,
    ctaPath: "/registy/honeymoon/checkout"
  },
  {
    title: "HOMEGOODS FUND",
    imagePath: "/registry/homegoods.png",
    fundPercentage: 5,
    ctaPath: "/registy/homegoods/checkout"
  },
]

const Fund = ({title, imagePath, fundPercentage, ctaPath}: FundProps) => {
  return (
    <div key={title} className='w-1/3 flex flex-col justify-between items-between'>
      <h5 className='text-[#3F3F3F]'>{title}</h5>
      <img className='w-full h-auto' src={imagePath}/>
      <a href={ctaPath} className="btn">Contribute</a>
      <p className='w-full'>{fundPercentage}% Funded</p>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: fundPercentage}}></div>
      </div>
    </div>
  )
}