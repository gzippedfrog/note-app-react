import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-start">
            <div className="navbar-brand">Note App</div>
            <div className="navbar-expand" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
