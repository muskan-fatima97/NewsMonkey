import "../App.css";
import Health from "../pages/health";
import Entertainment from "../pages/entertainment";
import Business from "../pages/business";
import Science from "../pages/science";
import Sports from "../pages/sports";
import Technology from "../pages/technology";
import Home from "../pages/home";
import Nation from "../pages/nation";
import Contact from "../pages/contact";
import About from "../pages/about";

const News = ({ category }) => {
  const getCategoryPage = () => {
    switch (category) {
      case "health": return <Health />;
      case "entertainment": return <Entertainment />;
      case "business": return <Business />;
      case "science": return <Science />;
      case "sports": return <Sports />;
      case "technology": return <Technology />;
      case "nation": return <Nation/>;
      case "contact": return <Contact/>;
      case "about": return <About/>
      default: return <Home />;
    }
  };

  return <div className="container news-section my-5">{getCategoryPage()}</div>;
};

export default News;
