import { Movie } from './../App'
import { useState, useEffect } from 'react';

/**
 * @interface SpokenLanguage
 * @description Interface for the spoken languages of a movie.
 * @property {string} english_name - The English name of the language.
 */
interface SpokenLanguage {
    english_name: string;
}

/**
 * @interface MovieDetails
 * @description Interface for the detailed information of a movie.
 * @property {SpokenLanguage[]} spoken_languages - The spoken languages of the movie.
 * @property {string} release_date - The release date of the movie.
 * @property {number} revenue - The revenue of the movie.
 * @property {number} runtime - The runtime of the movie.
 * @property {string} overview - The overview of the movie.
 */
interface MovieDetails {
    spoken_languages: SpokenLanguage[];
    release_date: string;
    revenue: number;
    runtime: number;
    overview: string;
}

/**
 * @type MoreInfoModalProps
 * @description Type for the props of the MoreInfoModal component.
 * @property {Movie} movie - The movie object.
 * @property {() => void} closeModal - The function to close the modal.
 */
type MoreInfoModalProps = {
    movie: Movie
    closeModal: () => void;
}

/**
 * @component MoreInfoModal
 * @description A modal component that displays more information about a movie.
 * @param {MoreInfoModalProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const MoreInfoModal = ({ movie, closeModal }: MoreInfoModalProps) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
    };

    /**
     * @description Fetches the movie details from the TMDB API when the component mounts.
     */
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
