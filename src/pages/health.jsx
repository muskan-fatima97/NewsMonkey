import React, { useEffect, useState } from "react";
import "../App.css";

const Loader = () => (
  <div className="loader-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", display: "block" }}
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#4fa94d"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  </div>
);

function Health() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsArticles();
  }, []);

  async function getNewsArticles() {
    setLoading(true);
    try {
      const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
      const response = await fetch(url);
      const data = await response.json();
      setNewsArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }

  return (
    <div className="news-container">
      {loading ? (
        <Loader />
      ) : newsArticles && newsArticles.length > 0 ? (
        newsArticles.map((article, index) => (
          <div className="card news-card" key={index}>
            <img
              src={article.urlToImage || "https://via.placeholder.com/400x200"}
              className="card-img-top"
              alt="News thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer" className="btn readMoreBtn">
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default Health;
