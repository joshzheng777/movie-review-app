import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Welcome from './Welcome'

const App = () => {

  return (
    <>
      <Navbar />
      <Welcome isLoggedIn={true} />
      <Footer />
    </>
  )
}

export default App
