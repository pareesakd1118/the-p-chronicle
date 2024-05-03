import './App.css';
import NavBar from "../NavBar/NavBar"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { Routes, Route } from 'react-router-dom';
import sampleData from "../../assets/sampleData"

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<ArticleContainer />} />
    </Routes>
    </>
  );
}

export default App;
