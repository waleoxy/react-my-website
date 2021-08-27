import React from 'react';
import ProfileInfo from "../components/ProfilePage/ProfileInfo";
import Hero from "../components/Hero";
import profileBcg from "../images/profileBcg.jpg";

export default function ProfilePage() {
    return (
        <>
            <Hero img= {profileBcg} />
            <ProfileInfo/>
        </>
    )
}
