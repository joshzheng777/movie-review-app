type WelcomeProps = {
    name: string
    isLoggedIn: boolean
}

// TODO: It's not recognizing the default value for name
Welcome.defaultProps = {
    name: "Bob",
    isLoggedIn: false,
}

function Welcome(props: WelcomeProps) {

    if (props.isLoggedIn === true) {
        return <p>Hello {props.name}</p>
    } else {
        return <p>Please log in</p>
    }

}

export default Welcome