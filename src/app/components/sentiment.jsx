import React from 'react'

const Sentiment = () => {
    return (
        <div className='bg-white rounded-md py-5 my-4 w-full'>
            <h1 className='text-xl md:text-2xl font-semibold flex ' >Sentiment</h1>
            <h2 className='text-base md:text-xl text-slate-600 font-semibold my-2'>Key Events</h2>
            <div className='flex overflow-auto no-scroll-bar  space-x-4 py-2 w-full'>
                <div className='flex space-x-2 md:min-w-[50%] min-w-[100%] rounded-md bg-indigo-100 px-4 py-6'>
                    <div className='rounded-full bg-indigo-400 min-w-10 flex items-center justify-center h-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>

                    </div>
                    <div className='flex flex-col space-y-2 '>
                        <h2 className='font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem?</h2>
                        <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nesciunt beatae praesentium blanditiis? Quae possimus velit optio voluptatem a, earum cupiditate illum praesentium mollitia? Culpa molestiae inventore expedita cumque aliquam!</p>
                    </div>
                </div>
                <div className='flex space-x-2 md:min-w-[50%] min-w-[100%] rounded-md bg-green-100 px-4 py-6'>
                    <div className='rounded-full bg-green-400 min-w-10 flex items-center justify-center h-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>


                    </div>
                    <div className='flex flex-col space-y-2 '>
                        <h2 className='font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem?</h2>
                        <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nesciunt beatae praesentium blanditiis? Quae possimus velit optio voluptatem a, earum cupiditate illum praesentium mollitia? Culpa molestiae inventore expedita cumque aliquam!</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-start w-full  pt-4">
                <div class="flex flex-row justify-start items-center w-full ">
                    <div class="flex flex-row justify-start ">
                        <h6 class="text-gray-900 font-inter !text-blue_gray-800_02 !text-[18.91px] text-lg font-semibold leading-[23px]">Analyst Estimates</h6></div>
                </div><div class="flex flex-row justify-between items-center w-full ">
                    <div class="flex flex-row ">
                        <div class="flex flex-col items-center justify-center w-[75%] pt-10 md:p-[27px] bg-blue_gray-50 rounded-[50%]">
                            <div class="flex flex-row justify-start items-center w-[97%] gap-0.5 py-[3px] my-1">
                                <div class="flex flex-col items-center justify-between">
                                    <p class="text-gray-900_06 font-inter h-24 w-24 md:h-32 md:w-32 text-center flex justify-center items-center mb-px !text-teal-A700 !text-[36.41px] text-4xl font-medium bg-green-100 text-green-500 rounded-full ">76%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:w-[78%] w-full">
                        <div class="flex flex-row justify-between md:justify-start items-center w-full p-2">
                            <div class="flex flex-row justify-start w-[10%]">
                                <p class="text-gray-900_06 font-inter mt-0.5 !text-blue_gray-400_01 text-[15px] font-medium leading-[19px]">Buy</p>
                            </div>
                            <div class="h-[8px] w-[65%] bg-teal-500 rounded-sm">
                            </div>
                            <div class="flex flex-row justify-end w-[8%]">
                                <p class="text-gray-900_06 font-inter !text-blue_gray-400_01  !text-[14.25px] text-sm font-medium">76%</p>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-6 md:space-x-0 md:justify-start items-center w-full  p-2">
                            <div class="flex flex-row justify-between md:justify-start w-[10%]">
                                <p class="text-gray-900_06 font-inter mt-px !text-blue_gray-400_01 !text-[15.13px] text-[15px] font-medium leading-[19px]">Hold</p>
                            </div>
                            <div class="h-[8px] bg-slate-300 w-[7%] bg-gray-400 rounded-sm">
                            </div>
                            <div class="flex flex-row justify-center w-[8%]">
                                <p class="text-gray-900_06 font-inter  !text-blue_gray-400_01 !text-[15.63px] text-[15px] font-medium leading-[19px]">8%</p></div></div><div class="flex space-x-6 md:space-x-0 flex-row  justify-start items-center w-full p-2"><div class=" flex flex-row justify-start w-[10%]"><p class="text-gray-900_06 font-inter mt-px !text-blue_gray-400_01 !text-[15.13px] text-[15px] font-medium leading-[19px]">Sell</p></div><div class="h-[8px] w-[13%] bg-red-500 rounded-sm"></div><div class="flex flex-row justify-end w-[8%]"><p class="text-gray-900_06 font-inter !text-blue_gray-400_01 !text-[15.63px] text-[15px] font-medium leading-[19px]">16%</p></div></div></div></div></div>
        </div>
    )
}

export default Sentiment