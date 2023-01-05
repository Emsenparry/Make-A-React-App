import { ShowNav } from "../nav/nav"


const Header = props => {
    return (
        <header className="main-header">
            <h1>{props.pageTitle}</h1>
            <nav className="main-navigation">
            <ShowNav />
            </nav>
        </header>
    )
}

export { Header }