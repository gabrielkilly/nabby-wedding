import React from 'react'
import Navbar, { NavItems } from '@/components/Navbar'
import Head from 'next/head'

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
          <Navbar tabname={NavItems.travel.name} />
      </main>
    </>
  )
}