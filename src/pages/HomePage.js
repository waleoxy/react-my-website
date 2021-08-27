import React from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import myFamily from "../images/myFamily.jpg";
import Skills from "../components/HomePage/Skills";
import FearturedWork from "../components/HomePage/FeaturedWork";

export default function HomePage() {
    return (
        <>
           <Hero title = "Website by Reactjs" max="true" img = {myFamily}>
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
