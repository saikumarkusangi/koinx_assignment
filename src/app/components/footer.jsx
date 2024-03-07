import React from 'react'
import Suggestion from './suggestions'
import TrendingCoinsCarousel from './trendingCoinsCarousel'

const Footer = () => {
    return (
        <div className='bg-white rounded-b-md flex flex-col gap-10 md:gap-4  px-5 md:px-10 py-5 md:py-14'>
            <Suggestion />
            <TrendingCoinsCarousel/>
        </div>
    )
}

export default Footer