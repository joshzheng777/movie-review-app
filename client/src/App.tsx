import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Footer from './Components/Footer'

import { useState, useEffect } from 'react'

/**
 * Configuration options for TMDB API requests, including headers and authorization.
 */
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

/**
 * Main application component responsible for managing movie data, search, and display.
 */
const App = () => {

    // State to manage the current search term entered by the user.
    const [searchTerm, setSearchTerm] = useState("");

    /**
     * Interface defining the structure of a Movie object.
     */
    interface Movie {
        id: number;
        title: string;
        poster_path: string;
        rating: number;
    }

    // TODO: Implemented Watch Later List
    // const [watchLaterList, setWatchLaterList] = useState<Movie[]>([])

    // State to store the list of popular movies fetched from the API.
    const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([])
    // State to store the list of movies returned from a user search.
    const [searchMoviesList, setSearchMoviesList] = useState<Movie[]>([])

    /**
     * Fetches a list of popular movies from the TMDB API.
     * Updates the `popularMoviesList` state with the fetched data.
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
     * Handles movie searches based on the current `searchTerm`.
     * Fetches search results from the TMDB API and updates the `searchMoviesList` state.
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
     * Resets the application to display popular movies.
     * Clears search results and re-fetches popular movies.
     */
    const handleReturnHome = () => {
        setSearchMoviesList([]); // Clear search results to show popular movies
        fetchPopularMovies(); // Re-fetch popular movies to ensure the list is fresh
    }

    // Effect hook to fetch popular movies when the component mounts.
    useEffect(() => {
        fetchPopularMovies();
    }, []) // Empty dependency array ensures this runs only once on mount

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar component, passing the handleReturnHome function for logo click */}
            <Navbar
                onLogoClick={handleReturnHome} 
            />
            <main className="flex-grow">
                {/* Welcome message for the user */}
                <Welcome isLoggedIn={true} />
                {/* SearchBar component for movie search functionality */}
                <SearchBar
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    onSearch={handleSearch}
                />

                {/* TODO: Implemented Watch Later List */}
                {/* <div className="my-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Your Watchlist</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {watchLaterList.map((movie) => (
                            <Card
                                key={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                </div> */}

                {/* Conditional rendering: Display search results if available, otherwise display popular movies. */}
                {searchMoviesList.length === 0 ? (
                    <div className="my-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Popular Movies</h2>
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
                    </div>
                ) : (
                    <div className="my-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Search Results</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {searchMoviesList.map((movie) => (
                                <Card 
                                    key={movie.id} 
                                    title={movie.title} 
                                    poster_path={movie.poster_path} 
                                    rating={movie.rating}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>
            {/* Footer component */}
            <Footer />
        </div>
    )
}

export default App

