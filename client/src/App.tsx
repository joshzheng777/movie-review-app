import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

import { useState } from 'react'

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    interface Movie {
        title: string;
        poster_path: string;
    }

    const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([
        {
            title: "Man of Steel",
            poster_path: "../assets/man-of-steel.jpg"
        }
    ])

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Welcome isLoggedIn={true} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
