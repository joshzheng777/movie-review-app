import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

import { useState } from 'react'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

const App = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));

    const [searchTerm, setSearchTerm] = useState("");
    interface Movie {
        id: number;
        title: string;
        poster_path: string;
        rating: number;
    }

    const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([
        // {
        //     id: 1,
        //     title: "Man of Steel",
        //     poster_path: "../assets/man-of-steel.jpg",
        //     rating: 5
        // },
        // {
        //     id: 2,
        //     title: "Batman v. Superman: Dawn of Justice",
        //     poster_path: "../assets/batman-v-superman.jpg",
        //     rating: 3
        // },
        // {
        //     id: 3,
        //     title: "Wonder Woman",
        //     poster_path: "../assets/wonder-woman.jpg",
        //     rating: 4
        // },
        // {
        //     id: 4,
        //     title: "Zack Synder's Justice League",
        //     poster_path: "../assets/zack-synder-justice-league.png",
        //     rating: 4
        // }
    ])

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Welcome isLoggedIn={true} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex flex-wrap justify-center gap-4">
                {popularMoviesList.map((movie) => (
                    <Card key={movie.id} title={movie.title} poster_path={movie.poster_path} />
                ))}
            </div>
        </main>
        <Footer />
        </div>
    )
}

export default App
