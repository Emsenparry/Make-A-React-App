import { ShowNav } from "../nav/nav"


const Header = props => {
    return (
        <header>
            <h1>{props.pageTitle}</h1>
            <nav className="Main-Navigation">
            <ShowNav />
            </nav>
        </header>
    )
}

export { Header }