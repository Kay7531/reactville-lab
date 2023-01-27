import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <Link to= "/" id="logos"> <img src="Logo"></img> </Link>
            <Link to="/burgers">BURGER SHOP</Link>
        </header>
    )
}

export default Nav