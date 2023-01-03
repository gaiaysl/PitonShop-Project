import Head from "next/head"
import Navbar from "../Navbar"
export default function Layout({ children }) {
    return (
      <div>
            <Head>
                <title>Piton Shop</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
        <Navbar />
  
        <main>{children}</main>
        
      </div>
    )
  }
  