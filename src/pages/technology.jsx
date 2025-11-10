import React, { useEffect, useState } from 'react';
import "../App.css";

function Technology() {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        getNewsArticles();
    }, [])
    async function getNewsArticles() {
        // const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
        const API_KEY = "590d242396dc448b855b9c558b0cbbc9";
        const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;
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
export default Technology;
