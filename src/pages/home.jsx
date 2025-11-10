import React, { useEffect, useState } from 'react';
import "../App.css";

// Loader component
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
        cx="250"
        cy="250"
        fill="none"
        stroke="#4fa94d"
        strokeWidth="10"
        r="75"
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

function Home() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true); // added loading state

    useEffect(() => {
        getNewsArticles();
    }, []);

    async function getNewsArticles() {
        setLoading(true); // start loading
         // const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
        // const url="https://gnews.io/api/v4/search?q=general&lang=en&country=us&apikey=03e9a77704719995f3a9acda12dc1c92"
        const API_KEY = "590d242396dc448b855b9c558b0cbbc9";
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2025-10-10&sortBy=publishedAt&apiKey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setNewsArticles(data.articles);
        setLoading(false); // stop loading
    }

    return (
        <div className="news-container">
            {loading ? (
                <Loader /> // show loader while fetching
            ) : (
                newsArticles.map((article, index) => (
                    <div className="card news-card" key={index}>
                        <img src={article.urlToImage || "https://via.placeholder.com/400x200"} className="card-img-top" alt="News thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noreferrer" className="btn readMoreBtn">Read More</a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Home;
