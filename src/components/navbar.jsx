import '../styles/navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">

            <div className="logo">
                <img src='image/disney.svg' alt=""  width="150"  />

            </div>
            <div className="nav_links">

                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/movies">Favourties</Link></li>
                    <li><Link to="/add-favouties">Add To Favourties</Link></li>
                    <li><Link to="">Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;