type WelcomeProps = {
    name: string
    isLoggedIn: boolean
}

const Welcome = (props: WelcomeProps) => {

    if (props.isLoggedIn === true) {
        return <p>Hello {props.name}</p>
    } else {
        return <p>Please log in</p>
    }

}

// TODO: It's not recognizing the default value for name
Welcome.defaultProps = {
    name: "Bob",
    isLoggedIn: false,
}

export default Welcome