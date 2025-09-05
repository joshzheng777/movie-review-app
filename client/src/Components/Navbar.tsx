type NavbarProps = {
    onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }: NavbarProps): React.JSX.Element => {
    return (
        <>
            <nav className="bg-red-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" onClick={onLogoClick} className="font-bold text-xl">
                        <img src="../assets/logo.png" alt="logo" className="object-cover h-[75px] w-[100px]" />
                    </a>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-300">Watch Later</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">Account</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
