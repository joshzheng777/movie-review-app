type MoreInfoModalProps = {
    title: string;
    poster_path: string;
    rating: number;
    closeModal: () => void;
}

const MoreInfoModal = ({ title, poster_path, rating, closeModal }: MoreInfoModalProps) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <img className="w-full h-auto mb-4" src={poster_path} alt="poster" />
                    <p className="text-gray-700 text-base mb-4">⭐ {rating}</p>
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default MoreInfoModal
