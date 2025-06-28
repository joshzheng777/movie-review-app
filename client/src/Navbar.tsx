

const Navbar = () => {    
    return(
        <>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex space-x-4 items-center">
                    <li>
                        <a href="#" className="font-bold text-xl">Website Logo</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Movies</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Account</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">About</a>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Welcome to Movie Reviews</h1>
                <p>Search</p>
            </div>
        </>
    )
}

export default Navbar
