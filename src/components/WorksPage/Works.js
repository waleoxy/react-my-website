import React from 'react';
import {ProductConsumer} from "../../context";
import Title from "../Title";
import Product from "../Product";

export default function Works() {
    return (
        <ProductConsumer>
          {
              value =>{
                  const{filteredWorks} = value;
                  return(
                      <section className="py-5">
                        <div className="container">
                          <Title center title="my works"/>
                          <div className="row py-5">
                            {filteredWorks.map(work => {
                                return(
                                    <Product key={work.id} product={work}></Product>
                                )
                            })}
                          </div>                        
                        </div>
                      </section>
                  )
              }
          }        
        </ProductConsumer>
    )
}
