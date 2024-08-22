import Footer from './components/Footer';
import HomePageBottom from './components/HomePageBottom';
import Navbar from './components/Navbar';
import Home from './Home'
import { useState } from "react";

function App() {


  return(
    <section>
      {/* This is navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* This is homepage */}
      <main className=''>
        <Home />
      </main>
      
      {/* This is footer */}
      <footer>
        <Footer />
        <HomePageBottom />
      </footer>
      
    </section>
  )
}
export default App