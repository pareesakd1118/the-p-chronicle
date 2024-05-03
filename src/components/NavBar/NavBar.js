import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav>
            <Link to="/">
                <h1>The P Chronicle</h1>
            </Link>
            <h2>April 30, 2024</h2>
            <div className="divider"></div>
        </nav>
    )
}