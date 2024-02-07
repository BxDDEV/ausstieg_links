import Footer from "./footer/footer";
import Navbar from "./navbar/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <Navbar/>
        <div>
          <main>{children}</main>
        </div>
        
        <Footer/>
      </div>
    );
  }