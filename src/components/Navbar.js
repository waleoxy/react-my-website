import React from 'react'
import {FaBars} from "react-icons/fa";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";
import styled from "styled-components";

export default function Navbar() {
    return (
        <ProductConsumer>
         {value=>{
             const{handleSidebar} = value;
             return (
                 <NavWrapper>
                  <div className="nav-center">
                    <FaBars className="nav-icon" onClick= {handleSidebar} />
                    <img src= {logo} alt= "otubulogo"/>
                  </div>
                </NavWrapper>
             )
                 
            }}
        </ProductConsumer>     
    );
}
const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGrey);
    border-bottom: 3px solid var(--primaryColor);
    z-index:1 ;
  }
  .nav-center{
      display: flex;
      align-items: center;
      justify-content: right;
      max-width: 1170px;
      margin: 0 auto;
  }
  .nav-icon{
      margin-right: 40%;
      font-size: 1.3rem;
      cursor: pointer;
  }

`;

