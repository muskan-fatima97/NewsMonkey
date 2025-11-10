import React, { useEffect, useState } from 'react';
import "../App.css";

function Entertainment() {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        getNewsArticles();
    }, [])
    async function getNewsArticles() {
        const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
        const response = await fetch(url);
        const data = await response.json();
        setNewsArticles(data.articles);
    }

    return (
        <div className="news-container">
            {newsArticles.map((article, index) => (
                <div className="card news-card" key={index}>
                    <img src={article.urlToImage || "https://via.placeholder.com/400x200"} className="card-img-top" alt="News thumbnail"/>
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a href={article.url} target="_blank" rel="noreferrer" className="btn readMoreBtn">Read More</a>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Entertainment;
