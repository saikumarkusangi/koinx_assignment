import Image from 'next/image'
import React from 'react'

const TrendingCardWidget = ({ image, name, symbol, value }) => {
    return (
        <div className='flex py-2 items-center justify-between'>
            <span className='flex space-x-2 '>
                <Image width={800} height={800} className='object-contain w-8' src={image} alt={name} />
                <span className=' max-w-[85%] overflow-x-clip text-ellipsis'>
                    <p className='capitalize font-medium '>{name}<span className='uppercase'> ({symbol})</span></p>
                </span>
            </span>
            <span className={`${value < 0 ? "bg-red-100" : "bg-green-100"} px-2  rounded-md flex items-center justify-between min-w-28 max-w-28`}>
                <svg height="30" viewBox="0 0 48 48" width="30" className={`${value < 0 ? "text-red-500" : "text-green-500"}`}>
                    {value > 0 ? (
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
                <p className={`font-semibold ${value < 0? "text-red-500" : "text-green-500"}`}>{value}%</p>

            </span>
        </div>
    )
}

export default TrendingCardWidget

