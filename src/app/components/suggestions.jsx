"use client"
import React, { useRef } from 'react'
import { useTrendingCoinsStore } from '../lib/store';
import Loading from './ui/loading';
import Image from 'next/image';
import Link from 'next/link';


const Suggestion = () => {
    let carouslRef = useRef(null);
    const { loading, trendingCoins } = useTrendingCoinsStore();

    const prev = () => {
        carouslRef &&
            carouslRef.current &&
            carouslRef.current.scrollTo({
                behavior: "smooth",
                top: 0,
                left:
                    carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.5,
            });
    };

    const next = () => {
        carouslRef &&
            carouslRef.current &&
            carouslRef.current.scrollTo({
                behavior: "smooth",
                top: 0,
                left:
                    carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.5,
            });
    };

    return (
        <div className='flex flex-col items-start justify-center'>
            <h1 className='text-xl md:text-2xl font-semibold leading-[30px]'>You May Also Like</h1>
            <div className='flex w-full items-center justify-between  pt-4 md:pt-10'>
                <button className='direction' onClick={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <div className='flex items-center w-[90%] md:w-[96%] justify-start'>
                    {
                        loading ?
                            <Loading /> :
                            <main className='flex w-full space-x-3 overflow-hidden' ref={carouslRef}>
                                {trendingCoins.slice(8, -1).map((coin, i) => (
                                    <Link key={i} href={`/${coin.name}`}>
                                        <div className='cursor-pointer min-w-48 h-44 md:min-w-72  md:h-44 border rounded-md border-slate-300 p-4'>
                                            <span className='flex items-center space-x-2'>
                                                <Image width={800} height={800} className='w-6 md:w-8' src={coin.large} alt={coin.name} />
                                                <p className='text-sm md:text-base uppercase'>{coin.symbol}</p>
                                                <span className={`text-[10px] md:text-sm rounded-md px-2 ${coin.data.price_change_percentage_24h.usd > 0 ? "bg-green-100" : "bg-red-100"}`}>{coin.data.price_change_percentage_24h.usd > 0 && '+'}{coin.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
                                            </span>
                                            <h1 className='text-lg md:text-xl font-medium pt-2'>{coin.data.price.toLocaleString('en-US')}</h1>
                                            <Image width={900} height={900} className='w-full h-full md:px-10 pb-10 md:pb-20 object-contain' src={coin.data.sparkline} alt='chart' />
                                        </div>
                                    </Link>
                                ))}
                            </main>
                    }
                </div>
                <button className='direction' onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>

    )
}

export default Suggestion