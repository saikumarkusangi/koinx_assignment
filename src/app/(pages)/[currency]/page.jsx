

import TrendingCoins from '../../components/trendingCoins'
import About from '../../components/about'
import CurrentCurrency from '../../components/cryptocurrencies/titleCard'
import Footer from '../../components/footer'
import GetStartedCard from '../../components/getStartedcard'
import Stats from '../../components/stats'
import Team from '../../components/team'
import Link from 'next/link'


const Cryptocurrencies = ({ params }) => {

    return (
        <>
            <span className="flex items-center py-2">
                <Link href={"/"} className="text-slate-600 text-sm mr-2 cursor-pointer">Cryptocurrencies</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-slate-600 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <p className="font-medium capitalize ml-1 cursor-pointer">{params.currency}</p>
            </span>
            <div className="flex flex-col lg:flex-row gap-5 justify-between">
                <div className="w-full lg:w-[70%]">
                    <CurrentCurrency name={params.currency} />
                    <Stats />
                    <span className='block md:hidden'>
                        <Footer />
                    </span>

                </div>
                <div className="w-full lg:w-[35%] flex flex-col space-y-5">
                    <GetStartedCard />
                    <TrendingCoins />
                </div>
            </div>
            
        </>
    )
}

export default Cryptocurrencies