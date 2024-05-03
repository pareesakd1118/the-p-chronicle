import "./ArticleContainer.css"; 
import Article from "../Article/Article";
import React, { useState } from "react";
import sampleData from "../../assets/sampleData"

export default function ArticleContainer() {
    const [isSearch, setIsSearch] = useState(false)
    const [searchData, setSearchData] = useState(sampleData.articles)

    const handleSearch = (keyword) => {
        if (keyword) {
            let key = keyword.toLowerCase() 
            let filteredData = sampleData.articles.filter(data => {
                let author = data.author || ""
                return (data.title.toLowerCase().includes(key) || data.description.toLowerCase().includes(key) || author.toLowerCase().includes(key))
            })
            setSearchData(filteredData)
        } else {
            setSearchData(sampleData.articles)
        }
    }

    const articles = searchData.map(data => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let dateArray = data.publishedAt.split("-")
        let reformattedDate = `${months[parseInt(dateArray[1]) - 1]} ${dateArray[0]} |`
        // if (data.source.id && data.author && data.title && data.urlToImage && data.publishedAt) {
            return (
                <Article 
                    id={data.source.id}
                    source={data.source.name}
                    author={data.author}
                    title={data.title}
                    date={reformattedDate}
                    imageUrl={data.urlToImage}
                />
            )
        // }
    })

    return (
        <>
            <div id="ac-h2btn-div">
                <h2 id="ac-top">Top Stories</h2>
                {!isSearch && <button id="search-btn" onClick={() => {setIsSearch(true)}}>Search</button>}
            </div>
            {isSearch && 
            <div id="ac-search-div">
                <div id="input-div">
                    <label id="ac-search-lbl" for="search">Search for article by title, author or keyword</label>
                    <input onChange={e => handleSearch(e.target.value)} type="text" id="search" name="search" placeholder="  Type to search" />
                </div>
                <button id="close-btn" onClick={() => {setIsSearch(false)}}>Close x</button>
            </div>}
            <div id="article-container">
                {articles}
            </div>
        </>
    )
}

// "source": {
//     "id": null,
//     "name": "[Removed]"
// },
// "author": null,
// "title": "[Removed]",
// "description": "[Removed]",
// "url": "https://removed.com",
// "urlToImage": null,
// "publishedAt": "1970-01-01T00:00:00Z",
// "content": "[Removed]"