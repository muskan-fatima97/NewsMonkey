import React, { useEffect, useState } from 'react';
import "../App.css";
// import ''
function Business() {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        getNewsArticles();
    }, [])
    async function getNewsArticles() {
        const url = "https://gnews.io/api/v4/search?q=general&lang=en&country=us&apikey=03e9a77704719995f3a9acda12dc1c92";
        const response = await fetch(url);
        const data = await response.json();
        setNewsArticles(data.articles);
    }
    // console.log(newsArticles);

    return (
        <div className="news-container">
            {newsArticles.map((article, index) => (
                <div className="card news-card" key={index}>
                    <img src={article.image || "https://via.placeholder.com/400x200"} className="card-img-top" alt="News thumbnail"/>
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
export default Business;
