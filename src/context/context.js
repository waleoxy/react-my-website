import React, { Component } from 'react';
import {linkData} from "./linkData";
import {socialData} from "./socialData"; 
import {items} from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    
    state = {
        sidebarOpen: false,
        links: linkData,
        socialLinks: socialData,
        savedWorks: [],
        featuredWorks: [],
        filteredWorks: [],
        singleWork: {},
        loading: true
    };
    
    componentDidMount(){

        this.setWorks(items);
    }
    setWorks = (products) =>{
        let savedWorks = products.map(item =>{
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id,...item.fields, image};
            return product
        });
        let featuredWorks = savedWorks.filter(item =>item.featured===true)
        this.setState({
           savedWorks,
           filteredWorks: savedWorks,
           featuredWorks,
           singleWork: this.getSingleWork()
        })
    }

    getSingleWork = () =>{
        return localStorage.getItem("singleWork") ? JSON.parse(localStorage.getItem("singleWork")) : {};
    };
    setSingleWork = (id) =>{
       let work = this.state.savedWorks.find(item => item.id === id);
       localStorage.setItem("singleWork", JSON.stringify(work));
       this.setState({
           singleWork: {...work},
           loading: false 
       });
    };
    handleSidebar = ()=>{
        this.setState({sidebarOpen: !this.state.sidebarOpen});    
    };

    render() {
        return (
            <ProductContext.Provider 
              value = {{
                ...this.state,
                handleSidebar: this.handleSidebar,
                setSingleWork: this.setSingleWork
            }}
            >
             {this.props.children}
            </ProductContext.Provider>
            );
        }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}; 