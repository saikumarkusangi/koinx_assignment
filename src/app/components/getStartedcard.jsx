import React from 'react'
import Image from 'next/image'
import Button from './ui/button'

const GetStartedCard = () => {
  return (
    <div className="bg-blue rounded-xl p-12 flex flex-col space-y-6 justify-center items-center">
      <h2 className="text-2xl text-center text-white font-semibold leading-relaxed">Get Started with KoinX for FREE</h2>
      <p className="text-white text-center text-[12px] leading-relaxed">With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.</p>
      <Image width={150} height={150} src={"/images/get_started.svg"} alt="get started" />
      <Button className="bg-white font-semibold text-[16px] py-3  flex items-center space-x-4">
        <>
          <p>Get Started for FREE</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </>
      </Button>
    </div>
  )
}

export default GetStartedCard