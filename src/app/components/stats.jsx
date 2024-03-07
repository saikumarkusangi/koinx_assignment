"use client"
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Stats_Tab_Labels } from '../constants';
import About from './about';
import Image from 'next/image';
import Team from './team';
import { useCurrencyStore } from '../lib/store';
import Loading from './ui/loading';
import Sentiment from './sentiment';

const Stats = () => {
    const { currency, loading } = useCurrencyStore();
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <div className='py-6 relative overflow-hidden '>
            <Tabs>
                <TabList className="flex space-x-4 lg:space-x-6 w-full overflow-x-auto">
                    {Stats_Tab_Labels.map((label, index) => (
                        <Tab
                            onClick={() => setSelectedTabIndex(index)}
                            key={index} className="text-[#3E414A] text-[16px] h-10 aria-selected:bg-transparent  aria-selected:text-blue aria-selected:outline-none aria-selected:ring-0   decoration-blue decoration-[3.5px]  aria-selected:underline underline-offset-[10px]    aria-selected:bg-gray  font-medium cursor-pointer hover:text-blue">
                            {label}
                        </Tab>
                    ))}
                    <div className='w-full h-[1px] -left-4 top-[51px]  absolute bg-slate-300'></div>
                </TabList>
                {
                    loading ? <Loading /> :
                        <>
                            <TabPanel className={`bg-white p-5 mt-6 rounded-md shadow-sm ${selectedTabIndex === 0 ? 'block' : 'hidden'
                                }`}>
                                <h2 className='font-semibold text-xl md:text-2xl'>Performance</h2>
                                <div>
                                    <div className="flex flex-row justify-between w-full my-4">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <div className="flex flex-col items-center justify-start  pb-[13px] gap-2.5">
                                                <div className="flex flex-row justify-start w-full">
                                                    <p className="text-slate-800 font-inter mt-2 text-[13px]  leading-4">Today’s Low</p>
                                                </div>
                                                <div className="flex flex-row justify-start w-full pt-[3px]">
                                                    <p className="text-slate-700 font-inter text-sm md:text-base  font-medium leading-[19px]">46,930.22</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center w-[40%] md:w-[70%]">
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    <Image src={"/images/range.png"} alt='range' width={500} height={500} className='w-[70%] h-10 md:w-full' />

                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start pb-[13px] gap-2.5">
                                                <div className="flex flex-row justify-end w-full">
                                                    <p className="text-slate-800 font-inter mt-2  text-right  text-[13px] font-medium leading-4">Today’s High</p>
                                                </div>
                                                <div className="flex flex-row justify-end w-full pt-[3px]">
                                                    <p className="text-slate-700 font-inter  text-right text-sm md:text-base font-medium leading-[19px]">49,343.83</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between  w-full my-4">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <div className="flex flex-col items-center justify-start pb-[13px] gap-2.5">
                                                <div className="flex flex-row justify-start w-full">
                                                    <p className="text-slate-800 font-inter mt-2   text-[13px] font-medium leading-4">52W Low</p>
                                                </div>
                                                <div className="flex flex-row justify-start w-full pt-[3px]">
                                                    <p className="text-slate-700 font-inter text-sm md:text-base font-medium leading-[19px]">14,930.22</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center w-[40%] md:w-[70%]">
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    <Image src={"/images/range.png"} alt='range' width={500} height={500} className='w-[70%] h-10 md:w-full' />

                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start  pb-[13px] gap-2.5">
                                                <div className="flex flex-row justify-end w-full">
                                                    <p className="text-slate-800 font-inter mt-2  text-right   text-[13px] font-medium leading-4">52W High</p>
                                                </div>
                                                <div className="flex flex-row justify-end w-full pt-[3px]">
                                                    <p className="text-slate-700 font-inter  text-right text-sm md:text-base font-medium leading-[19px]">48,343.83</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='font-semibold text-xl md:text-2xl'>Fundamentals</h2>
                                <div className="flex flex-col md:flex-row justify-between items-center w-[99%] mt-3.5">
                                    <div className="flex flex-col items-center justify-between md:justify-center w-full md:w-[42%] pt-[18px]">
                                        <div className="flex flex-row justify-between items-center w-full pr-[13px] border-slate-300 border-b border-solid pb-2">
                                            <p className="text-gray-900_06 font-inter mb-px text-slate-500 text-sm font-medium">Bitcoin Price</p>
                                            <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-[13px] font-medium leading-4">$16,815.46</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-start w-full ">
                                            <div className="flex flex-row justify-between w-full py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-between w-[39%] pr-[3px] py-[3px]">
                                                    <p className="text-gray-900_06 font-inter mt-[11px] mb-[9px] text-slate-500 text-sm font-medium">24h Low / 24h High</p>
                                                </div>
                                                <p className="text-gray-900_06 font-inter pl-[35px] pr-[11px] py-3.5 !text-gray-900_03 text-right  text-[13px] font-medium leading-4">$16,382.07 / $16,874.12</p>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-[7px] mb-[5px] text-slate-500 text-sm font-medium">7d Low / 7d High</p>
                                                <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-[13px] font-medium leading-4">$16,382.07 / $16,874.12</p>
                                            </div>
                                            <div className="flex flex-row justify-between w-full pr-3 py-3 border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-[7px] mb-[5px] text-slate-500 text-sm font-medium">Trading Volume</p><p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">$23,249,202,782</p>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-3 py-3 border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-1.5 mb-1 text-slate-500 text-sm font-medium">Market Cap Rank</p>
                                                <p className="text-gray-900_06 font-inter h-[16px] !text-gray-900_03 text-right text-[13px] font-medium leading-4">#1</p></div></div>
                                    </div>
                                    <div className="flex flex-row justify-between md:justify-center w-full md:w-[48%]">
                                        <div className="flex flex-col items-center justify-start w-full">
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-3">
                                                    <p className="text-gray-900_06 font-inter mt-0.5 text-slate-500 text-sm font-medium">Market Cap</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-[7px]">
                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">$323,507,290,047</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-[13px]">
                                                    <p className="text-gray-900_06 font-inter mt-px text-slate-500 text-sm font-medium">Market Cap Dominance</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-2">
                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">38.343%</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 z-[1] border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-[13px]">
                                                    <p className="text-gray-900_06 font-inter mt-px text-slate-500 text-sm font-medium">Volume / Market Cap</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-[7px]">
                                                    <p className="text-gray-900_06 font-inter  text-right text-[13px] font-medium leading-4">0.0718</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center w-full mt-[-3px]">
                                                <div className="flex flex-col w-full">
                                                    <div className="flex flex-row justify-center w-full">
                                                        <div className="h-[61px] w-full py-[3px] relative">
                                                            <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-slate-300 border-b border-solid absolute">
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center w-[97%] top-[18%] right-0 left-0 m-auto absolute">
                                                                <p className="text-gray-900_06 font-inter text-slate-500 text-sm font-medium">All-Time High</p>
                                                                <div className="flex flex-col items-end justify-start gap-[3px]">
                                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 !font-roboto text-right text-sm font-medium">
                                                                        <span className="text-gray-900_03 font-inter">$69,044.77 </span>
                                                                        <span className="text-red-500 font-inter">-75.6%</span>
                                                                    </p>
                                                                    <p className="text-gray-900_06 font-inter text-slate-500 text-right !text-[11.2px] text-[11px] font-normal">Nov 10, 2021 (about 1 year)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row justify-center w-full">
                                                        <div className="h-[61px] w-full py-[3px] relative">
                                                            <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-slate-300 border-b border-solid absolute">
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                                                <p className="text-gray-900_06 font-inter text-slate-500 text-sm font-medium">All-Time Low</p>
                                                                <div className="flex flex-col items-end justify-start gap-[7px]">
                                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 !font-roboto text-right text-sm font-medium">
                                                                        <span className="text-gray-900_03 font-inter">$67.81 </span>
                                                                        <span className="text-teal-A700 font-inter">24729.1%</span>
                                                                    </p>
                                                                    <p className="text-gray-900_06 font-inter text-slate-500 text-right !text-[11.2px] text-[11px] font-normal">Jul 06, 2013 (over 9 years)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Sentiment/>
                                <About name={currency.id} />
                                <Team />
                            </TabPanel>
                            <TabPanel className={`bg-white p-5 mt-6 rounded-md shadow-sm ${selectedTabIndex === 1 ? 'block' : 'hidden'
                                }`}>
                                <h2 className='font-semibold text-xl md:text-2xl'>Fundamentals</h2>
                                <div className="flex flex-col md:flex-row justify-between items-center w-[99%] mt-3.5">
                                    <div className="flex flex-col items-center justify-between md:justify-center w-full md:w-[42%] pt-[18px]">
                                        <div className="flex flex-row justify-between items-center w-full pr-[13px] border-slate-300 border-b border-solid pb-2">
                                            <p className="text-gray-900_06 font-inter mb-px text-slate-500 text-sm font-medium">Bitcoin Price</p>
                                            <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-[13px] font-medium leading-4">$16,815.46</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-start w-full ">
                                            <div className="flex flex-row justify-between w-full py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-between w-[39%] pr-[3px] py-[3px]">
                                                    <p className="text-gray-900_06 font-inter mt-[11px] mb-[9px] text-slate-500 text-sm font-medium">24h Low / 24h High</p>
                                                </div>
                                                <p className="text-gray-900_06 font-inter pl-[35px] pr-[11px] py-3.5 !text-gray-900_03 text-right  text-[13px] font-medium leading-4">$16,382.07 / $16,874.12</p>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-[7px] mb-[5px] text-slate-500 text-sm font-medium">7d Low / 7d High</p>
                                                <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-[13px] font-medium leading-4">$16,382.07 / $16,874.12</p>
                                            </div>
                                            <div className="flex flex-row justify-between w-full pr-3 py-3 border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-[7px] mb-[5px] text-slate-500 text-sm font-medium">Trading Volume</p><p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">$23,249,202,782</p>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-3 py-3 border-slate-300 border-b border-solid">
                                                <p className="text-gray-900_06 font-inter mt-1.5 mb-1 text-slate-500 text-sm font-medium">Market Cap Rank</p>
                                                <p className="text-gray-900_06 font-inter h-[16px] !text-gray-900_03 text-right text-[13px] font-medium leading-4">#1</p></div></div>
                                    </div>
                                    <div className="flex flex-row justify-between md:justify-center w-full md:w-[48%]">
                                        <div className="flex flex-col items-center justify-start w-full">
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-3">
                                                    <p className="text-gray-900_06 font-inter mt-0.5 text-slate-500 text-sm font-medium">Market Cap</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-[7px]">
                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">$323,507,290,047</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-[13px]">
                                                    <p className="text-gray-900_06 font-inter mt-px text-slate-500 text-sm font-medium">Market Cap Dominance</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-2">
                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 text-right text-sm font-medium">38.343%</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-center w-full pr-1 py-1 z-[1] border-slate-300 border-b border-solid">
                                                <div className="flex flex-row justify-start py-[13px]">
                                                    <p className="text-gray-900_06 font-inter mt-px text-slate-500 text-sm font-medium">Volume / Market Cap</p>
                                                </div>
                                                <div className="flex flex-row justify-center mr-[7px]">
                                                    <p className="text-gray-900_06 font-inter  text-right text-[13px] font-medium leading-4">0.0718</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center w-full mt-[-3px]">
                                                <div className="flex flex-col w-full">
                                                    <div className="flex flex-row justify-center w-full">
                                                        <div className="h-[61px] w-full py-[3px] relative">
                                                            <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-slate-300 border-b border-solid absolute">
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center w-[97%] top-[18%] right-0 left-0 m-auto absolute">
                                                                <p className="text-gray-900_06 font-inter text-slate-500 text-sm font-medium">All-Time High</p>
                                                                <div className="flex flex-col items-end justify-start gap-[3px]">
                                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 !font-roboto text-right text-sm font-medium">
                                                                        <span className="text-gray-900_03 font-inter">$69,044.77 </span>
                                                                        <span className="text-red-500 font-inter">-75.6%</span>
                                                                    </p>
                                                                    <p className="text-gray-900_06 font-inter text-slate-500 text-right !text-[11.2px] text-[11px] font-normal">Nov 10, 2021 (about 1 year)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row justify-center w-full">
                                                        <div className="h-[61px] w-full py-[3px] relative">
                                                            <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-slate-300 border-b border-solid absolute">
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                                                <p className="text-gray-900_06 font-inter text-slate-500 text-sm font-medium">All-Time Low</p>
                                                                <div className="flex flex-col items-end justify-start gap-[7px]">
                                                                    <p className="text-gray-900_06 font-inter !text-gray-900_03 !font-roboto text-right text-sm font-medium">
                                                                        <span className="text-gray-900_03 font-inter">$67.81 </span>
                                                                        <span className="text-teal-A700 font-inter">24729.1%</span>
                                                                    </p>
                                                                    <p className="text-gray-900_06 font-inter text-slate-500 text-right !text-[11.2px] text-[11px] font-normal">Jul 06, 2013 (over 9 years)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel  className={`bg-white p-5 mt-6 rounded-md shadow-sm ${
                                selectedTabIndex === 2 ? 'block' : 'hidden'
                            }`}>

                            </TabPanel>
                            <TabPanel  className={`bg-white p-5 mt-6 rounded-md shadow-sm ${
                                selectedTabIndex === 3 ? 'block' : 'hidden'
                            }`}>

                            </TabPanel>
                            <TabPanel  className={`bg-white p-5 mt-6 rounded-md shadow-sm ${
                                selectedTabIndex === 4 ? 'block' : 'hidden'
                            }`}>
                                <Team />
                            </TabPanel>
                            <TabPanel  className={`bg-white p-5 mt-6 rounded-md shadow-sm ${
                                selectedTabIndex === 5 ? 'block' : 'hidden'
                            }`}>

                            </TabPanel>
                            <TabPanel  className={`bg-white p-5 mt-6 rounded-md shadow-sm ${
                                selectedTabIndex === 6 ? 'block' : 'hidden'
                            }`}>

                            </TabPanel>
                        </>

                }

            </Tabs>

        </div>
    );
}

export default Stats;
