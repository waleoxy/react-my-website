import React from 'react';
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpg";
import { Link } from "react-router-dom";
import "../components/Hero.css";

export default function DefaultPage() {
    return (
        <>
           <Hero title="404" max="true"  img= {defaultBcg}>
            <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="linktext">
                    return home
                </Link>

           </Hero>
        </>
    )
}