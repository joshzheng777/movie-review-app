import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

import { useState, useEffect } from 'react'

/**
 * @constant options
 * @description Configuration options for TMDB API requests, including headers and authorization.
 */
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

/**
 * @interface Movie
 * @description Interface defining the structure of a Movie object.
 * @property {number} id - The unique identifier of the movie.
 * @property {string} title - The title of the movie.
 * @property {string} poster_path - The URL path to the movie's poster image.
 * @property {number} rating - The rating of the movie.
 */
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    rating: number;
}

/**
 * @component App
 * @description Main application component responsible for managing movie data, search, and display.
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = (): React.JSX.Element => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [watchLaterList, setWatchLaterList] = useState<Movie[]>([])
    const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([])
    const [searchMoviesList, setSearchMoviesList] = useState<Movie[]>([])

    /**
     * @function fetchPopularMovies
     * @description Fetches a list of popular movies from the TMDB API and updates the `popularMoviesList` state.
     */
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

    /**
     * @function handleSearch
     * @description Handles movie searches based on the current `searchTerm`. Fetches search results from the TMDB API and updates the `searchMoviesList` state.
     */
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
                setSearchMoviesList(movies);
            })
            .catch(err => console.error(err));
    }

    /**
     * @function handleReturnHome
     * @description Resets the application to display popular movies by clearing search results and re-fetching popular movies.
     */
    const handleReturnHome = () => {
        setSearchMoviesList([]);
        fetchPopularMovies();
    }

    /**
     * @description Effect hook to fetch popular movies when the component mounts.
     */
    useEffect(() => {
        fetchPopularMovies();
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar
                onLogoClick={handleReturnHome} 
            />
            <main className="flex-grow">
                <Welcome isLoggedIn={true} />
                <SearchBar
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    onSearch={handleSearch}
                />

                {/* For now, Water Later list is shown by default */}
                {watchLaterList.length === 0 ? (
                    <p>Watch Later List is empty right now</p>
                ) : (
                    <div className="my-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Your Watchlist</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {watchLaterList.map((movie) => (
                                <Card
                                    key={movie.id}
                                    movie={movie}
                                    watchLaterList={watchLaterList}
                                    setWatchLaterList={setWatchLaterList}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {searchMoviesList.length === 0 ? (

                    // Popular Movies shown by default
                    <div className="my-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Popular Movies</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {popularMoviesList.map((movie) => (
                                <Card
                                    key={movie.id}
                                    movie={movie}
                                    watchLaterList={watchLaterList}
                                    setWatchLaterList={setWatchLaterList}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    
                    // Search Results list shown after seearch is performed
                    <div className="my-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Search Results</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {searchMoviesList.map((movie) => (
                                <Card 
                                    key={movie.id} 
                                    movie={movie}
                                    watchLaterList={watchLaterList}
                                    setWatchLaterList={setWatchLaterList}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default App
