import {create} from 'zustand';

const useTrendingCoinsStore = create((set) => ({
  trendingCoins: [],
  loading: true ,
  setLoading: (loading) => set({ loading }),
  setTrendingCoins: (trendingCoins) => set({ trendingCoins }),
}));

const useCurrencyStore = create((set) => ({
  currency: [],
  loading: true,
  setLoading: (loading) => set({ loading }),
  setCurrency: (currency) => set({ currency }),
}));

export  {useTrendingCoinsStore,useCurrencyStore};
