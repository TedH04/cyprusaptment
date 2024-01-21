import './App.css'
import { Header } from './components/header'
import { SliderSection } from './components/slidersection'
import { ApartmentDesc } from './components/apartmentDesc'
import { ContactPage } from './components/contactPage'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SliderSection />
        <ApartmentDesc />
        <ContactPage />
      </header>
    </div>
  )
}

export default App
