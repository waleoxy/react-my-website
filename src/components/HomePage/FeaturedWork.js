import React, { Component } from 'react';
import {ProductConsumer} from "../../context";
import Title from "../../components/Title";
import Product from "../Product";

export default class FeaturedWork extends Component {
    render() {
        return (
            <section className="py-5 my-4">
             <div className="container">
              <Title title="Featured work" center="true"/>
             </div>
             <div className="row" my-5>
              <ProductConsumer>
               {value =>{
                   const{featuredWorks} = value;
                return featuredWorks.map(product =>(
                    <Product key={product.id} product={product}></Product>
                     ))
               }}
              </ProductConsumer>
             </div>
                
            </section>
        )
    }
}
