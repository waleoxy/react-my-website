import React from 'react';
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpeg";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

export default function DetailWork() {
    return (
     <>
      <Hero img={singleProductBcg} title ="work description"></Hero>
      <ProductConsumer>
        {
          value =>{
            const{singleWork, loading} = value;
            if(loading){
              console.log("hello from loading")
              return <h1>work loading......</h1>
            }
            const{tech, description, id, title, image} = singleWork;

            return<section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-ms-8 col-md-6" my-3>
                    <img 
                    src= {'../${image}'}
                    alt="singleImage"
                     className="image-fluid"/>
                  </div>
                </div>
              </div>
            </section>
            
          }
        }
      </ProductConsumer>
    </>
    )
}
