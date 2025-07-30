type CardProps = {
    title: string
    poster_path: string
    rating: number
}

const Card = ({ title, poster_path, rating }: CardProps) => {
    if (poster_path === "https://image.tmdb.org/t/p/w500null") {
        poster_path = "../assets/no-image-placeholder.png"
    }

    return (
        <div className="max-w-[18rem] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
            <img className="aspect-2/3 object-cover" src={poster_path} alt="poster" />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-center">{title}</p>
                <p className="text-gray-700 text-base text-center">⭐ {rating}</p>
                <div className="text-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Watch Later
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
