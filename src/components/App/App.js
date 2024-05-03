import './App.css';
import NavBar from "../NavBar/NavBar"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import ArticleDeets from "../ArticleDeets/ArticleDeets"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<ArticleContainer />} />
      <Route path="/:url" element={<ArticleDeets />} />
    </Routes>
    </>
  );
}

export default App;
