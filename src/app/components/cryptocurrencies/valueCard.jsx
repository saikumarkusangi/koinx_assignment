"use client"
import { Changa } from 'next/font/google';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TitleCardSkeleton from '../ui/skeletons/chartCard';

const CurrentCurrencyValue = ({ name }) => {
    const [currency, setcurrency] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchcurrency = async () => {
            try {
              
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=inr%2Cusd&include_24hr_change=true`);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setcurrency(data[name])

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchcurrency();
    }, []);
    return (

        <>
            {
                loading ? <TitleCardSkeleton />
                    : <div>
                        <span className='flex flex-col space-y-2'>
                            <span className='flex space-x-8 md:space-x-10'>
                                <h1 className='text-3xl lg:text-4xl font-semibold leading-[34px]'>${currency.usd.toLocaleString('en-IN')}</h1>
                                <span className='flex items-center space-x-2 md:space-x-4'>
                                    <span className={`${currency.usd_24h_change.toFixed(2) < 0 ? "bg-red-100" : "bg-green-100"} px-2  rounded-md flex items-center justify-between`}>
                                        <svg height="30" viewBox="0 0 48 48" width="30" className={`${currency.usd_24h_change.toFixed(2).toString().includes('-') ? "text-red-500" : "text-green-500"}`}>
                                            {currency.usd_24h_change.toFixed(2) > 0 ? (
                                                <>
                                                    <path d="M14 28l10-10 10 10z " fill='currentColor' />
                                                    <path d="M0 0h48v48h-48z" fill="none" /></>
                                            ) : (
                                                <>
                                                    <path d="M14 20l10 10 10-10z" fill='currentColor' />
                                                    <path d="M0 0h48v48h-48z" fill="none" />
                                                </>
                                            )
                                            }
                                        </svg>
                                        <p className={`text-sm md:text-base font-semibold ${currency.usd_24h_change.toFixed(2) < 0 ? "text-red-500" : "text-green-500"}`}>{currency.usd_24h_change.toFixed(2)}%</p>

                                    </span>
                                    <p className='text-slate-500 text-sm md:text-base font-medium'>(24H)</p>
                                </span>
                            </span>

                            <h1 className='text-base lg:text-lg font-medium leading-[34px]'>₹ {currency.inr.toLocaleString('en-IN')}</h1>
                        </span>
                    </div>
            }

        </>

    )
}

export default CurrentCurrencyValue