import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {ProductConsumer} from "../context";

export default function Product({product}) {
    return (
        <ProductConsumer>
         {
             value =>{
                 const {setSingleWork} = value;
                 return(
                     <WorkWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
                       <div className="card">
                         <div className="image-container">
                           <img 
                           src= {product.image} 
                           className="card-img-top p-5" 
                           alt="productImg"
                           style={{height:"320px"}}/>
                           <div className="product-icons">
                             <Link to={"/detailwork/${product.id}"} onClick={()=>setSingleWork(product.id)}> 
                               <FaSearch className="icon"/>
                             </Link>
                           </div>
                         </div>
                         <div className="card-body d-flex justify-content-between">
                           <p className="mb-0">{product.title}</p>
                         </div>
                       </div>
                     </WorkWrapper>
                 )
             }
         }
        </ProductConsumer>
    )
}

const WorkWrapper = styled.div`
.card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height:100%;
}
.card:hover{
    box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.card-img-top{
    transition: var(--mainTransition);
}
.card:hover .card-img-top{
    transform: scale(1.15);
    opacity: 0.2;
}
.image-container{
    position: relative;
}
.product-icons{
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
}
.icon{
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
}
.card:hover .product-icons{
    opacity: 1;
}
.card-body{
    font-weight: bold;
    letter-spacing:2px;
    text-transform: uppercase;
}
`
