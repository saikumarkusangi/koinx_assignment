import BitcoinChart from "./components/cryptocurrencies/titleCard";
import GetStartedCard from "./components/getStartedcard";
import TrendingCoins from "./components/trendingCoins";
import Stats from "./components/stats";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[140vh]">
      <h1 className="text-2xl font-bold">List of Coins</h1>
      <ul className="pt-4">
        <li className="py-2 text-lg font-medium hover:underline">
          <Link href={"/bitcoin"}>Bitcoin</Link>

        </li>
        <li className="py-2 text-lg font-medium hover:underline">
          <Link href={"/ethereum"}>Ethereum</Link>

        </li>
        <li className="py-2 text-lg font-medium hover:underline">
          <Link href={"/solana"}>Solana</Link>

        </li>
        <li className="py-2 text-lg font-medium hover:underline"> <Link href={"/xrp"}>XRP</Link>
        </li>
        <li className="py-2 text-lg font-medium hover:underline"> <Link href={"/cardano"}>Cardano</Link>
        </li>
        <li className="py-2 text-lg font-medium hover:underline">   <Link href={"/dogecoin"}>Dogecoin</Link></li>
      </ul>
    </div>
  );
}
