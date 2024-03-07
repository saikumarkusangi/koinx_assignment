import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <div className='bg-white rounded-md md:p-5 my-4'>
            <h1 className='text-xl md:text-2xl font-semibold flex ' >Team</h1>
            <p className='my-4 text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, expedita reprehenderit ut iste hic eum odio, laudantium labore ad cupiditate aspernatur aliquid culpa atque.</p>
            <div className='flex flex-col gap-4'>
                <div   className="flex gap-4 flex-col md:flex-row justify-start items-center w-full bg-[#adcbfc80] p-4 rounded-md">
                    <div   className="flex flex-col items-center justify-start  gap-3 w-32">
                        <div   className="flex flex-col items-center justify-start w-[75%]">
                            <div   className="flex flex-col items-center justify-start w-full  rounded-md">
                                <Image width={300} height={300}  className="w-full object-cover rounded-md" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="john_smith_one"  />
                            </div>
                        </div>
                        <div   className="flex flex-col items-center justify-start  ">
                            <p   className="font-inter text-center text-[15px] font-semibold">John Smith</p>
                            <p   className="font-inter text-center  text-xs font-normal">CEO</p>
                        </div>
                    </div>
                    <p   className=" font-inter w-full text-slate-800 text-[12px] leading-[160%]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                </div>
                <div   className="flex gap-4 flex-col md:flex-row justify-start items-center w-full bg-[#adcbfc80] p-4 rounded-md">
                    <div   className="flex flex-col items-center justify-start  gap-3 w-32">
                        <div   className="flex flex-col items-center justify-start w-[75%]">
                            <div   className="flex flex-col items-center justify-start w-full  rounded-md">
                                <Image width={300}  height={300}  className="w-full object-cover rounded-md" src="https://xsgames.co/randomusers/avatar.php?g=female" alt="john_smith_one"  />
                            </div>
                        </div>
                        <div   className="flex flex-col items-center justify-start  ">
                            <p   className="font-inter text-center text-[15px] font-semibold">John Smith</p>
                            <p   className="font-inter text-center  text-xs font-normal">Founder</p>
                        </div>
                    </div>
                    <p   className=" font-inter w-full text-slate-800 text-[12px] leading-[160%]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                </div>
            </div>
        </div>
    )
}

export default Team