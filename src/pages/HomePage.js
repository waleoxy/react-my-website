import React from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import mainBcg from "../images/mainBcg.jpg1.jpg";
import Skills from "../components/HomePage/Skills";
import FearturedWork from "../components/HomePage/FeaturedWork";

export default function HomePage() {
    return (
        <>
           <Hero title = "Reactjs by Waleoxy" max="true" img = {mainBcg}>
            <Link className="linktext" to="/works"
             style={{margin: "2rem"}}> 
             my works 
            </Link>
           </Hero>
           <Skills/>
           <FearturedWork/>
        </>
    )
}
