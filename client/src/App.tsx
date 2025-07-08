import './App.css'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Footer from './Footer'

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Welcome isLoggedIn={true} />
        </main>
        <Footer />
        </div>
    )
}

export default App
