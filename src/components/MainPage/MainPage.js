import "./MainPage.css"
import NavBar from "../NavBar/NavBar"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { Routes, Route } from 'react-router-dom';

export default function MainPage() {

    return (
        <>
            <NavBar />
            <ArticleContainer />
        </>
    )
}