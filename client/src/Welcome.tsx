type WelcomeProps = {
    name?: string;
    isLoggedIn?: boolean;
}

const Welcome = ({ name, isLoggedIn = false }: WelcomeProps) => {
    if (isLoggedIn) {
        return (
            <div className="p-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Cut To The Chase{name ? `, ${name}` : ''}!</h1>
            </div>
        )
    } else {
        return (
            <div className="p-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Please Log In</h1>
            </div>
        )
    }
}

export default Welcome