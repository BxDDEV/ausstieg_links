import Head from "next/head";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Head>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      <div>
        <Navbar/>
        <div>
          <main>{children}</main>
        </div>
        <Footer/>
      </div>
      </>
    );
  }