import { Movie } from './../App'
import MoreInfoModal from './MoreInfoModal'

import { useState } from 'react';

/**
 * @type CardProps
 * @description Type for the props of the Card component.
 * @property {Movie} movie - The movie object to be displayed in the card.
 */
type CardProps = {
    movie: Movie
}

/**
 * @component Card
 * @description A component that displays a movie card with its poster, title, and rating.
 * @param {CardProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const Card = ({ movie }: CardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (movie.poster_path === "https://image.tmdb.org/t/p/w500null") {
        movie.poster_path = "../assets/no-image-placeholder.png"
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-[18rem] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 flex flex-col">
            <img className="aspect-2/3 object-cover" src={movie.poster_path} alt="poster" />
            <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="flex-grow">
                    <p className="font-bold text-xl mb-2 text-center">{movie.title}</p>
                    <p className="text-gray-700 text-base text-center">⭐ {movie.rating}</p>
                </div>
                <div className="text-center mt-4">
                    <button onClick={openModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2">
                        More Info
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Watch Later
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <MoreInfoModal
                    movie={movie}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Card
