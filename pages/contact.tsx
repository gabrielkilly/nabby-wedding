import React, { useState } from 'react'
import Navbar, { NavItems } from '../components/Navbar'
import Head from 'next/head'

export default function Contact() {
    const [lastCopiedText, setLastCopiedText] = useState("")

  return (
    <>
      <Head>
        <title>Gabriel & Nayeli Wedding | Contact</title>
        <meta name="description" content="Iteneray for Gabriel & Nayeli's Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Navbar tabname={NavItems.contact.name} />
          <div className='flex flex-col justify-center px-8 lg:px-16 gap-y-8 w-full mb-8'>
            <h2 className='mt-8'>Contact / <span className='italic'>Contacto</span></h2>
            <p className='p2'>Please contact us if you have any questions or concerns about the wedding, website, or RSVP form.</p>
            <p className='p2 italic'>No dudes en contactarnos si tienes alguna pregunta o preocupación en cuanto a la boda, este sitio web, o la forma de RSVP.</p>
            <ContactSection
                name='Gabriel Killy'
                email='gabykilly@gmail.com'
                phoneNumber='(340) 244 - 3113'
                lastCopiedText={lastCopiedText}
                setLastCopiedText={setLastCopiedText}
                />
            <ContactSection
                name='Nayeli Perez'
                email='nayeliaperezt@gmail.com'
                phoneNumber='(915) 449 - 3373'
                lastCopiedText={lastCopiedText}
                setLastCopiedText={setLastCopiedText}
                />
          </div>
      </main>
    </>
  )
}

interface ContactSectionProps {
    name: string, 
    email: string, 
    phoneNumber: string,
    lastCopiedText: string, 
    setLastCopiedText: (string) => void
}

const ContactSection = ({name, email, phoneNumber, lastCopiedText, setLastCopiedText}: ContactSectionProps) => {

    const copyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value)
        setLastCopiedText(value)
    }

    const getCopyButtonText = (value: string) => {
        if (value === lastCopiedText) {
            setTimeout(() => { setLastCopiedText("")}, 1100)
            return <p className='text-xs ml-2 rounded text-white bg-moss-600 p-1'>Copied to clipboard</p>
        } else {
            return <p className='underline text-xs text-gray-500 ml-2 mt-1'>Copy</p>
        }
    }

    return (
        <div className='flex flex-col'>
            <h5 className='text-gray-700'>{name}</h5>
            <div className='flex flex-col lg:flex-row lg:items-center mt-4 cursor-pointer' onClick={() => copyToClipboard(email)}>
                <p className='mr-2 text-gray-700'><strong>Email</strong></p>
                <div className='flex'>
                    <p className='p2' >{email}</p>
                    {getCopyButtonText(email)}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center mt-2 cursor-pointer' onClick={() => copyToClipboard(phoneNumber)}>
                <p className='mr-2 text-gray-700'><strong>Phone Number</strong></p>
                <div className='flex'>
                    <p className='p2'>{phoneNumber}</p>
                    {getCopyButtonText(phoneNumber)}
                </div>
            </div>
        </div>
    )
}