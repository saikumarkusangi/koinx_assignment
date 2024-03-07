"use client"
import React from 'react'
import { useCurrencyStore } from '../lib/store'
import Loading from './ui/loading'
import Image from 'next/image'
import Button from './ui/button'

const About = ({ name }) => {
    const { currency, loading } = useCurrencyStore()
    return (
        <div className='bg-white rounded-md  md:p-5'>
            {
                loading ? <Loading /> :
                    <>
                        <h1 className='text-xl md:text-2xl font-semibold flex ' >About <p className='capitalize ml-2'> {name}</p></h1>
                        <h3 className='font-bold py-4 flex'>What is <p className='capitalize ml-2'>{name}</p>?</h3>
                        <div className='overflow-hidden'>
                        <p className='text-slate-700 text-sm font-medium ' >{currency.description.en}</p>
                        </div>
                        <hr className='my-6 text-slate-300' />
                        <h1 className='text-xl md:text-2xl font-semibold flex '>Already Holding <p className='ml-2 capitalize'>{name}?</p></h1>
                        <span className='flex md:flex-row flex-col w-full space-y-4 md:space-y-0 space-x-0 md:space-x-10 pt-4'>
                            <div className='w-full rounded-md bg-gradient-to-br from-green-400 to-[#2852db]  p-3 flex md:space-x-4'>
                                <Image width={900} height={900} className='w-24 h-24 md:w-28 md:h-28 object-cover' src={"/images/img1.png"} alt='' />
                                <span className='space-y-2 flex px-4 flex-col items-start justify-center'>
                                    <h1 className='text-lg text-white font-semibold'>Calculate your Profits</h1>
                                    <Button className="bg-white text-sm py-1 flex items-center spacex-2">Check Now
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>

                                    </Button>
                                </span>
                            </div>
                            <div className='w-full rounded-md bg-gradient-to-br from-orange-400 to-red-600 p-3 flex space-x-0 md:space-x-4'>
                                <Image width={900} height={900} className='w-24 h-24 md:w-28 md:h-28 object-cover' src={"/images/img2.png"} alt='' />
                                <span className='space-y-2 flex px-4 flex-col items-start justify-center'>
                                    <h1 className='text-lg text-white font-semibold'>Calculate your tax liability</h1>
                                    <Button className="bg-white text-sm py-1 flex items-center spacex-2">Check Now
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>

                                    </Button>
                                </span>
                            </div>
                        </span>
                    </>
            }
        </div>
    )
}

export default About