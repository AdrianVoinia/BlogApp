import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/articles-list">Articles</Link>
        </nav>
    )
};

export default NavBar;