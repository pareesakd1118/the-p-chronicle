import "./MainPage.css"
import NavBar from "../NavBar/NavBar"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import sampleData from "../../assests/sampleData"


export default function MainPage() {
    const [allNewsData, setAllNewsData] = useState([sampleData])

    return (
        <>
            <NavBar />
            <ArticleContainer dataSet={allNewsData}/>
        </>
    )
}