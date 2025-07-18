import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

import { useState, useEffect } from 'react'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");

    interface Movie {
        id: number;
        title: string;
        poster_path: string;
        rating: number;
    }

    const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([])

    const fetchPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then((res) => {
                const movies = res.results.slice(0, 12).map((movie: any) => ({
                    id: movie.id,
                    title: movie.original_title,
                    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    rating: movie.vote_average
                }));
                setPopularMoviesList(movies);
            })
            .catch(err => console.error(err));
    }

    const handleSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.slice(0, 12).map((movie: any) => ({
                    id: movie.id,
                    title: movie.original_title,
                    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    rating: movie.vote_average
                }));
                setPopularMoviesList(movies);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchPopularMovies();
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Welcome isLoggedIn={true} />
                <SearchBar 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    onSearch={handleSearch}
                />
                <div className="flex flex-wrap justify-center gap-4">
                    {popularMoviesList.map((movie) => (
                    <Card 
                        key={movie.id} 
                        title={movie.title} 
                        poster_path={movie.poster_path} 
                        rating={movie.rating}
                    />
                ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App
