import "../App.css";
import Health from "../pages/health";

function NavBar({ onCategoryChange }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsMonkey</a>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="/home" onClick={() => onCategoryChange("home")}>Home</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/business" onClick={() => onCategoryChange("business")}>Business</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/entertainment" onClick={() => onCategoryChange("entertainment")}>Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/health" onClick={() => onCategoryChange("health")}>Health</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/science" onClick={() => onCategoryChange("science")}>Science</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/sports" onClick={() => onCategoryChange("sports")}>Sports</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/technology" onClick={() => onCategoryChange("technology")}>Technology</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/nation" onClick={() => onCategoryChange("nation")}>Nation</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/about" onClick={() => onCategoryChange("about")}>About</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/contact" onClick={() => onCategoryChange("contact")}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
