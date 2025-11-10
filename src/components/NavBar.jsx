import "../App.css";
import { Link } from "react-router-dom";
function NavBar({ onCategoryChange }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to="/home" className="nav-link active"  onClick={() => onCategoryChange("home")}>Home</Link></li>
                           <li className="nav-item"> <Link to="/business" className="nav-link active"  onClick={() => onCategoryChange("business")}>Business</Link></li>
                            <li className="nav-item"><Link to="/entertainment" className="nav-link active" href="/entertainment" onClick={() => onCategoryChange("entertainment")}>Entertainment</Link></li>
                            <li className="nav-item"><Link to="/health" className="nav-link active" href="/health" onClick={() => onCategoryChange("health")}>Health</Link></li>
                            <li className="nav-item"><Link to="/science" className="nav-link active" href="/science" onClick={() => onCategoryChange("science")}>Science</Link></li>
                            <li className="nav-item"><Link to="/sports" className="nav-link active" href="/sports" onClick={() => onCategoryChange("sports")}>Sports</Link></li>
                            <li className="nav-item"><Link to= "/technology" className="nav-link active" href="/technology" onClick={() => onCategoryChange("technology")}>Technology</Link></li>
                            <li className="nav-item"><Link to="/nation" className="nav-link active" href="/nation" onClick={() => onCategoryChange("nation")}>Nation</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link active" href="/about" onClick={() => onCategoryChange("about")}>About</Link></li>
                           <li className="nav-item"> <Link to="/contact" className="nav-link active" href="/contact" onClick={() => onCategoryChange("contact")}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
