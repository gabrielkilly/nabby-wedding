import React, { useState } from 'react'
import Navbar, { NavItems } from '../components/Navbar'
import Head from 'next/head'

const items: AlcoholItem[] = [
    {
        name: "Karbach",
        price: 17.86,
        type: "BEER",
        servings: 12,
        percentageOfType: 0.25
    },
    {
        name: "Dos X",
        price: 16.81,
        type: "BEER",
        servings: 12,
        percentageOfType: 0.25
    },
    {
        name: "IPA",
        price: 16.81,
        type: "BEER",
        servings: 12,
        percentageOfType: 0.25
    },
    {
        name: "Bock",
        price: 12.02,
        type: "BEER",
        servings: 6,
        percentageOfType: 0.25
    },
    {
        name: "Red Wine",
        price: 14,
        type: "WINE",
        servings: 5,
        percentageOfType: 0.50
    },
    {
        name: "White Wine",
        price: 14,
        type: "WINE",
        servings: 5,
        percentageOfType: 0.50
    },
    {
        name: "Tequila",
        price: 33.65,
        type: "LIQUOR",
        servings: 30,
        percentageOfType: 0.3
    },
    {
        name: "Rum",
        price: 21.07,
        type: "LIQUOR",
        servings: 30,
        percentageOfType: 0.3
    },
    {
        name: "Whiskey",
        price: 23.13,
        type: "LIQUOR",
        servings: 16,
        percentageOfType: 0.1
    },
    {
        name: "Mezcal",
        price: 35,
        type: "LIQUOR",
        servings: 16,
        percentageOfType: 0.1
    },
    {
        name: "Gin",
        price: 22.49,
        type: "LIQUOR",
        servings: 16,
        percentageOfType: 0.2
    }
]

const guests = 145
const hours = 6
const drinksPerHour = guests
const totalDrinks = drinksPerHour*hours

const beersPercentage = 0.25
const winePercentage = 0.50
const liquorPercentage = 0.25

const totalBeers = totalDrinks*beersPercentage
const totalWines = totalDrinks*winePercentage
const totalMixedDrinks = totalDrinks*liquorPercentage

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const toUSD = (price: number) => USDollar.format(price)

interface AcloholTypeObjectList {
    objectList: AcloholTypeObject[]
}
interface AcloholTypeObject {
    name: string, 
    servingsNeeded: number, 
    pricePerServing: number,
    totalPrice: number
}

const getAcloholPriceByType = (type: string, totalServings: number): AcloholTypeObject[] =>
    items
        .filter(item => item.type == type)
        .map(item => {
            const pricePerServing = item.price / item.servings
            const servingsNeeded = totalServings * item.percentageOfType
            const totalPrice = pricePerServing * servingsNeeded
            return {
                name: item.name, servingsNeeded, pricePerServing, totalPrice
            }
        })



const AlcoholTypeAnalysisList = ({objectList}: AlcoholTypeObjectList[]) =>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Servings Needed</th>
                <th>Price Per Serving</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
            { objectList.map( object => 
                <tr>
                    <td className="text-center">{object.name}</td>
                    <td className="text-center">{object.servingsNeeded}</td>
                    <td className="text-center">{object.pricePerServing}</td>
                    <td className="text-center">{object.totalPrice}</td>
                </tr>
            )}
        </tbody>
    </table>

interface AlcoholItem {
    name: string, 
    type: string, 
    price: number,
    servings: number, 
    percentageOfType: number
}


const beers: AcloholTypeObject[] = getAcloholPriceByType("BEER", totalBeers*beersPercentage)
const wines: AcloholTypeObject[] = getAcloholPriceByType("WINE", totalWines*winePercentage)
const liquors: AcloholTypeObject[] = getAcloholPriceByType("LIQUOR", totalMixedDrinks*liquorPercentage)

console.log(beers)

const AlcoholItem = ({name, type, price, servings, percentageOfType}: AlcoholItem) => {
    return (
        <tr>
            <td className="text-center">{name}</td>
            <td className="text-center">{toUSD(price)}</td>
            <td className="text-center">{servings}</td>
            <td className="text-center">{type}</td>
            <td className="text-center">{percentageOfType}</td>
        </tr>
    )
}

export default function Contact() {
    const [lastCopiedText, setLastCopiedText] = useState("")

  return (
    <>
      <Head>
        <title>Alcohol Calculator</title>
      </Head>
      <main>
          <Navbar tabname={NavItems.contact.name} />
          <div className='flex flex-col px-8 lg:px-16 gap-y-8 mb-8'>
            <h2 className='mt-8 text-gray-700'>Alcohol Calculator</h2>
            <table className="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Servings</th>
                    <th>Type</th>
                    <th>Percentage of Type</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => AlcoholItem(item))}
            </tbody>
            </table>

            <p>Guests: {guests}</p>
            <p>Hours: {hours}</p>
            <p>Drinks per hour: {guests}</p>
            <p>Total Drinks: {guests*hours}</p>
            <p>Beer percent: %{beersPercentage*100}</p>
            <p>Wine percent: %{winePercentage*100}</p>
            <p>Liqour percent: %{liquorPercentage*100}</p>

            <AlcoholTypeAnalysisList objectList={beers}/> 

            <AlcoholTypeAnalysisList objectList={wines}/> 

            <AlcoholTypeAnalysisList objectList={liquors}/> 

          </div>
      </main>
    </>
  )
}