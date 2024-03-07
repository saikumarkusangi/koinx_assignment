"use client"
import React from 'react'
import TradingViewWidget from './tradingViewWidget'
import { useCurrencyStore } from '../../lib/store'
import Loading from '../ui/loading'

const ChartCard = ({ name }) => {
  const { currency, loading } = useCurrencyStore()

  return (
    <div className='overflow-hidden'>
      {
        loading ? <Loading /> :
          <>

            <h3 className='font-semibold flex text-lg mb-2'><p className='capitalize mr-2 '>{name}</p> price Chart (USD)</h3>

            <TradingViewWidget symbol={`BITSTAMP:${currency.symbol.toUpperCase()}USD`} />
          </>
      }
    </div>
  )
}

export default ChartCard



