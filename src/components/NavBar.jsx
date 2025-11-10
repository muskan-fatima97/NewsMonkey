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
                            <li className="nav-item"><a className="nav-link active" href="/home" onClick={(event) => {event.preventDefault(); onCategoryChange("home"); }}>Home</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/business" onClick={(event) => {event.preventDefault(); onCategoryChange("business"); }}>Business</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/entertainment" onClick={() => onCategoryChange("entertainment")}>Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/health" onClick={(event) => {event.preventDefault(); onCategoryChange("health"); }}>Health</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/science" onClick={(event) => {event.preventDefault(); onCategoryChange("science"); }}>Science</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/sports" onClick={(event) => {event.preventDefault(); onCategoryChange("sports"); }}>Sports</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/technology" onClick={(event) => {event.preventDefault(); onCategoryChange("technology"); }}>Technology</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/nation" onClick={(event) => {event.preventDefault(); onCategoryChange("nation"); }}>Nation</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/about" onClick={(event) => {event.preventDefault(); onCategoryChange("about"); }}>About</a></li>
                            <li className="nav-item"><a className="nav-link active" href="/contact" onClick={(event) => {event.preventDefault(); onCategoryChange("contact"); }}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
