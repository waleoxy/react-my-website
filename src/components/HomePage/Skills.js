import React, { Component } from 'react'
import styled from "styled-components";
import {FaAndroid, FaReact, FaJava} from "react-icons/fa";

export default class Skills extends Component {
    state={
        skillsSet:[
            {
                id: 1,
                icon: <FaAndroid/>,
                title: "Android programming",
                text:"Development of android apps, practical knoledge of use of firebase/noSQL databases, SQlite, ViewModel, RecyclerView..."
            },
            {
                id: 2,
                icon: <FaReact/>,
                title: "Reactjs programming",
                text:"Front End web based application using reactjs, practical knowledge of javascripts, bootstrap,css/sass, react-router, redux..."
            },
            {
                id: 3,
                icon: <FaJava/>,
                title: "Java programming",
                text:"Programming in Java: Development of desktop apps using scene builder"
            }
        ]
    };

    render() {
        return (
            <SkillsWrapper>
              <div className="container">
               <div className="row">
               {
                   this.state.skillsSet.map(item =>{
                       return (
                           <div className="col-10 mx auto col-sm-6 col-md-4
                            text-center my-3" key={item.id}>
                            <div className="skills-icon">
                             {item.icon}
                            </div>
                            <div className="mt-3 text-capitalize">
                            {item.title}
                            </div>
                            <div className="mt-3">
                             {item.text}
                            </div>
                       
                             </div>)
                   })
               }

               </div>
              </div>
                
            </SkillsWrapper>
        )
    }
}

const SkillsWrapper = styled.section`
background: rgba(95, 183, 234, 0.5);
.skills-icon{
    font-size: 2.5rem;
    color:var(--primaryColo
    r);
}
p{
    color:var(--darkGrey);
}

`;