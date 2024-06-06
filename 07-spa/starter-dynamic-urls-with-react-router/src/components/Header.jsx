// import './Header.scss';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
        <h1>E-commerce Site</h1>
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="products">Products</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Header
