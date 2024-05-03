import "./ArticleDeets.css";
import { useState, useEffect } from "react";
import getSFData from "../../apiCalls"
import { useParams } from 'react-router-dom';

export default function ArticleDeets() {
    const [ selectedArt, setSelectedArt ] = useState({})
    const { url } = useParams();

    function getSingleArticle() {
        getSFData()
        .then(data => {
           setSelectedArt(data.articles.find(art => {
            return art.url.includes(url)}))
        })
    }

    useEffect(() => {
        getSingleArticle()
    }, [])

    let reformattedDate; 

    if (selectedArt.publishedAt) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let dateArray = selectedArt.publishedAt.split("-")
        reformattedDate = `${months[parseInt(dateArray[1]) - 1]} ${dateArray[0]}`
    }

    return (
        <div className="ad-container">
            <img id="ad-img" src={selectedArt.urlToImage} alt={selectedArt.title}/>
            {selectedArt.source && selectedArt.source.name && <p id="ad-source">{selectedArt.source.name}</p>}
            <h2 id="ad-title">{selectedArt.title}</h2>
            <p>{reformattedDate ? `${reformattedDate} | ${selectedArt.author}` : selectedArt.author}</p> 
            <div className="divider"></div>
            {selectedArt.content && <p id="ad-content">{selectedArt.content}</p>}
        </div>
    )
}