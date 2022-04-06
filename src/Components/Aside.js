import React, { Component } from "react";  
import Discover from "../Components/Discover";
import { Search, } from '../Components/Search';


export class Aside extends Component{
    render(){
        return(
            <aside>
                <Search />
                <Discover />
            </aside>
        )
    }
}

export default Aside;


