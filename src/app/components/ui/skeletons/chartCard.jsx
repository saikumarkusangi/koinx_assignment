import React from 'react'

const TitleCardSkeleton = () => {
    return (
        <div className='flex flex-col space-y-4 md:space-y-0'>
            <span className='flex md:bg-white md:px-4  md:py-4  rounded-lg rounded-b-none  items-center space-x-8 w-full'>
                <span className='flex items-center space-x-2'>
                   <div className='w-10 h-10 rounded-full animate-pulse bg-slate-300'></div>
                   <div className='w-28 h-4 rounded-sm animate-pulse bg-slate-300'></div>
                 
                </span>
                <span className='bg-[#7d8592] animate-pulse text-white px-4 py-1 md:px-4 h-8 w-20 rounded-lg'></span>
            </span>
            <div className='w-full rounded-lg shadow-sm md:rounded-t-none   bg-white p-6'>
            
            </div>
        </div>
    )
}

export default TitleCardSkeleton