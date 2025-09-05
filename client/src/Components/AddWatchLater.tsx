import { Movie } from "../App"

type WatchLaterProps = {
    watchLaterList: Movie[],
    setWatchLaterList: React.Dispatch<React.SetStateAction<Movie[]>>
}

const handleAddWatchLater = () => {
    
}

const AddWatchLater: React.FC<WatchLaterProps> = ({
    watchLaterList,
    setWatchLaterList
}: WatchLaterProps): React.JSX.Element => {
    return(
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Watch Later
            </button>
        </>
    )
}

export default AddWatchLater