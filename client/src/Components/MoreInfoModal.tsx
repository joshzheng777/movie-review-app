import { Movie } from './../App'
import { useState, useEffect } from 'react';

interface SpokenLanguage {
    english_name: string;
}

interface MovieDetails {
    spoken_languages: SpokenLanguage[];
    release_date: string;
    revenue: number;
    runtime: number;
    overview: string;
}

type MoreInfoModalProps = {
    movie: Movie
    closeModal: () => void;
}

const MoreInfoModal = ({ movie, closeModal }: MoreInfoModalProps) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setMovieDetails(res);
            })
            .catch(err => console.error(err));
    }, [movie.id]);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
                    <div className="flex">
                        <div className="w-1/3">
                            <img className="w-full h-auto" src={movie.poster_path} alt="poster" />
                        </div>
                        <div className="w-2/3 pl-8">
                            <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                            <p className="text-gray-700 text-base mb-4">⭐ {movie.rating}</p>
                            {movieDetails ? (
                                <>
                                    <p className="text-gray-700 text-base mb-2"><strong>Spoken Languages:</strong> {movieDetails.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
                                    <p className="text-gray-700 text-base mb-2"><strong>Release Date:</strong> {movieDetails.release_date}</p>
                                    <p className="text-gray-700 text-base mb-2"><strong>Revenue:</strong> ${movieDetails.revenue.toLocaleString()}</p>
                                    <p className="text-gray-700 text-base mb-2"><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
                                    <p className="text-gray-700 text-base mb-4"><strong>Overview:</strong> {movieDetails.overview}</p>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                            <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreInfoModal
