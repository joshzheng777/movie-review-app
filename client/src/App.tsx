import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Welcome isLoggedIn={true} />
            <SearchBar />
        </main>
        <Footer />
        </div>
    )
}

export default App
