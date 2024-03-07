import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoinX: Trusted Crypto Tax Software and Portfolio Tracker",
  description: "Explore KoinX, the leading crypto tax software offering accurate tax reports and a user-friendly portfolio tracker. Streamline your crypto finances with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="bg-gray w-full px-4 md:px-10 py-4">
          {children}
        </main>
        <span className="hidden md:block">
          <Footer />
        </span>
      </body>
    </html>
  );
}
