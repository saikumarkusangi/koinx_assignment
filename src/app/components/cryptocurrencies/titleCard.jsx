"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TitleCardSkeleton from '../ui/skeletons/chartCard';
import CurrentCurrencyValue from './valueCard';
import ChartCard from './chartCard';
import { useCurrencyStore } from '../../lib/store';

const CurrentCurrency = ({ name }) => {
    const { currency, setCurrency, loading, setLoading } = useCurrencyStore()

    useEffect(() => {
        const fetchcurrency = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCurrency(data)

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchcurrency();
    }, []);
    return (
        <div className='flex flex-col space-y-4 md:space-y-0'>
            {
                loading ? <TitleCardSkeleton />
                    : <span className='flex md:bg-white md:px-4  md:py-6  rounded-lg rounded-b-none  items-center space-x-8 w-full'>
                        <span className='flex items-center space-x-2'>
                            <Image width={800} height={800} className='w-8 md:w-10' src={currency.image.large} alt={name} />
                            <h1 className='text-xl font-bold capitalize'>{name}</h1>
                            <p className='font-semibold text-base text-slate-600 uppercase'>{currency.symbol}</p>
                        </span>
                        <span className='bg-[#7d8592] text-white px-4 py-1 md:px-2 rounded-lg'>Rank #{currency.market_cap_rank}</span>
                    </span>
            }
            <div className='w-full rounded-lg shadow-sm md:rounded-t-none  bg-white p-6'>
                <CurrentCurrencyValue name={name} />
                <hr className='my-6 text-slate-300' />
                <ChartCard name={name} />
            </div>
        </div>

    )
}

export default CurrentCurrency