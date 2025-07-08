type SearchProps = {
    searchTerm?: string
}

const SearchBar = ({ searchTerm = "" }: SearchProps) => {
    return (
        <div className="flex justify-center w-full my-8">
            <input 
                type="text" 
                placeholder="Search Movies..." 
                className="w-1/2 p-4 text-lg text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
        </div>
    )
}

export default SearchBar
