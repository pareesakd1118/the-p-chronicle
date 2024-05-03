import "./ArticleContainer.css"; 
import Article from "../Article/Article";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getSFData from "../../apiCalls";
import search from "../../assets/search.svg";

export default function ArticleContainer() {
    const [isSearch, setIsSearch] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [allData, setAllData] = useState([])

    function setData() {
        getSFData()
        .then(data => {
            setSearchData(data.articles)
            setAllData(data.articles)
        })
    }

    useEffect(() => {
        setData()
    }, [])

    const handleSearch = (keyword) => {
        if (keyword) {
            let key = keyword.toLowerCase() 
            let filteredData = allData.filter(data => {
                let author = data.author || ""
                let description = data.description || ""
                let title = data.title || ""
                return (title.toLowerCase().includes(key) || description.toLowerCase().includes(key) || author.toLowerCase().includes(key))
            })
            setSearchData(filteredData)
        } else {
            setSearchData(allData)
        }
    }

    const articles = searchData.map(data => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let dateArray = data.publishedAt.split("-")
        let reformattedDate = `${months[parseInt(dateArray[1]) - 1]} ${dateArray[0]} |`
        let url = data.url.split("/").splice(-1)
        if (data.source.id && data.title && data.urlToImage && data.publishedAt) {
            return (
                <Link to={`/${url}`}>
                    <Article 
                        id={data.source.id}
                        source={data.source.name}
                        author={data.author}
                        title={data.title.split("").length < 100 ? data.title : `${data.title.slice(0, 100)}...`}
                        date={reformattedDate}
                        imageUrl={data.urlToImage}
                    />
                </Link>
            )
        }
    })

    return (
        <>
            <div id="ac-h2btn-div">
                <h2 id="ac-top">Top Stories</h2>
                {!isSearch && <button id="search-btn" onClick={() => {setIsSearch(true)}}>Search<img id="search-img" src={search} /></button>}
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
