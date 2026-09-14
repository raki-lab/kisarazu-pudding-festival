import './App.css'
import { NEW_DESIGN_ENABLED } from './theme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ShopList } from './components/ShopList'
import { VenueMap } from './components/VenueMap'
import { Notice } from './components/Notice'
import { Access } from './components/Access'
import { Schedule } from './components/Schedule'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className={`page${NEW_DESIGN_ENABLED ? ' theme-poster' : ''}`}>
      <Header />
      <Hero />
      <main>
        <ShopList />
        <div className="wave-divider" aria-hidden="true"></div>
        <VenueMap />
        <Notice />
        <div className="wave-divider" aria-hidden="true"></div>
        <Access />
        <Schedule />
        <Faq />
      </main>
      <Contact />
      <div className="wave-divider" aria-hidden="true"></div>
      <Footer />
    </div>
  )
}

export default App
