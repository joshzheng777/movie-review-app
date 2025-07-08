import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Welcome isLoggedIn={true} />
            <SearchBar />
            <div className="flex flex-wrap justify-center gap-4">
                <Card title="Man of Steel" poster_path="../assets/man-of-steel.jpg" />
                <Card title="Man of Steel" poster_path="../assets/man-of-steel.jpg" />
                <Card title="Man of Steel" poster_path="../assets/man-of-steel.jpg" />
                <Card title="Man of Steel" poster_path="../assets/man-of-steel.jpg" />
            </div>
        </main>
        <Footer />
        </div>
    )
}

export default App
