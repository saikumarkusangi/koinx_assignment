import Image from 'next/image'
import React from 'react'
import Button from './ui/button'

const Header = () => {
    return (
        <div className='w-full h-20 shadow-md  z-50 sticky top-0 bg-white flex justify-between items-center px-5 md:px-10'>
            <Image width={100} height={50} src={"/images/logo.png"} alt='Koinx' />
            <ul className='md:flex items-center space-x-10 font-semibold hidden'>
                <li>Crypto Taxes</li>
                <li>Free Tools</li>
                <li>Resource Center</li>
                <Button className="bg-blue text-white ">Get Started</Button>
            </ul>
            <button className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

        </div>
    )
}

export default Header