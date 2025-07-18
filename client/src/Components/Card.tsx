type CardProps = {
    title: string
    poster_path: string
    rating: number
}

const Card = ({ title, poster_path, rating }: CardProps) => {
    return (
        <div className="max-w-[18rem] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
            <img className="w-full" src={poster_path} alt="poster" />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-center">{title}</p>
                <p className="text-gray-700 text-base text-center">⭐ {rating}</p>
            </div>
        </div>
    )
}

export default Card
