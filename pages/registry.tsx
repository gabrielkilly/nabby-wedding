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
          <div className='flex w-[100vw] h-[100vh] justify-center items-center'>
            <h2>Coming Soon</h2>
          </div>
      </main>
    </>
  )
}