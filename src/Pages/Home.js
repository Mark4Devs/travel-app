import React, { Component } from "react";
import Aside from "../Components/Aside";
import Carousel from "../Components/Carousel";


export class Home extends Component{
    render(){
        return(
            <div class="wrapper">
                <main>
                    <Aside />
                    <Carousel />  
                </main>
            </div>
        )
    }
}

export default Home;