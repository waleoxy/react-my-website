import React from 'react';
import Title from "../Title";
import profileBcg1 from "../../images/profileBcg1.jpg";

export default function ProfileInfo() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={profileBcg1} 
                        className="img-fluid img-thumbnail"
                        style={{background: "var(--mainGrey)", border: "4px"}}
                         alt="pix"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                     <Title title="My Profile" />  
                      <p className="text-lead text-muted my-3">
                      Highly motivated, self-starting developer ever committed to continuous and never ending personal improvements.
                      This is validated by the fact that-apart from the love and passion I have for the tech world, 
                      especially programming and ever since I determined to change my career line, 
                      I have been able to equip myself adequately with skills that make me stand out in the tech world. 
                      I have had the privilege of apps for business solutions, educational tutorial app, personal website…. 
                      My journey in the world of IT has been both challenging and intriguing. There is no single day that I do not code. 
                      I look forward to rubbing minds with like great minds by working on a large scale in a corporate environment.
                      </p> 
                      <p className="text-lead text-muted my-3">
                      </p> 
                      <button className="linktext" 
                        type="button"
                        style={{marginTop: "2rem"}} >
                            view my resume
                        </button>
                    </div>

                </div>
            
            </div>
            
        </section>
    )
}

 