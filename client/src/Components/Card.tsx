import MoreInfoModal from './MoreInfoModal'

import { useState } from 'react';

// TODO: Switch to Movie type if possible
type CardProps = {
    title: string
    poster_path: string
    rating: number
}

const Card = ({ title, poster_path, rating }: CardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (poster_path === "https://image.tmdb.org/t/p/w500null") {
        poster_path = "../assets/no-image-placeholder.png"
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-[18rem] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 flex flex-col">
            <img className="aspect-2/3 object-cover" src={poster_path} alt="poster" />
            <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="flex-grow">
                    <p className="font-bold text-xl mb-2 text-center">{title}</p>
                    <p className="text-gray-700 text-base text-center">⭐ {rating}</p>
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
                    title={title}
                    poster_path={poster_path}
                    rating={rating}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Card
