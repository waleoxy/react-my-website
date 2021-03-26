import React from 'react'
import Works from "../components/WorksPage/Works";
import Hero from "../components/Hero";
import worksBcg from "../images/worksBcg.jpeg";
export default function WorksPage() {
    return (
        <>
            <Hero img={worksBcg} />
            <Works/>
        </>
    )
}
