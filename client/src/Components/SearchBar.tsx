import { Dispatch, SetStateAction } from "react"

type SearchProps = {
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
    onSearch: () => void;
}

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }: SearchProps) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className="flex justify-center w-full my-8">
            <div className="flex w-1/2">
                <input 
                    type="text" 
                    value={searchTerm} 
                    placeholder="Search Movies..." 
                    className="w-full p-4 text-lg text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}

export default SearchBar
