"use client"
import React, { useState, useEffect } from 'react';
import  Loading  from './ui/loading';
import TrendingCardWidget from './cards/tranding_card';
import {useTrendingCoinsStore} from '../lib/store';

const TrendingCoins = () => {
  const {loading,setLoading,trendingCoins,setTrendingCoins} = useTrendingCoinsStore();

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending'); 
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        const data = await response.json();
        const trendingCoinsData = data.coins || [];
        setTrendingCoins(trendingCoinsData.map(coin => coin.item));
      } catch (error) {
        console.error('Error fetching trending coins:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className='flex flex-col p-4 rounded-md bg-white'>
        <h1 className='font-semibold text-xl'>Trending Coins (24h)</h1>
         {
          loading ? 
          <Loading/>
          :
          <div className='pt-6'>
            {trendingCoins.slice(0, 3).map((coin, index) => (
              <TrendingCardWidget
                key={index}
                value={coin.data.price_change_percentage_24h.usd.toFixed(2)}
                image={coin.large}
                name={coin.name}
                symbol={coin.symbol.toUpperCase()}
              />
            ))}
          </div>
         }
    </div>
  );
}

export default TrendingCoins;
