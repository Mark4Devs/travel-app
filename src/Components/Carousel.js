import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Carousel extends Component{
    state = {
        loading: true,
        carouselData: null
    };
    
    async componentDidMount(){   
        const url = "/data/carousel-db.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({carouselData: data.tours, loading: false});
    }
    render(){
        return(
            <div id="carouselExampleIndicatos" class="carousel slide" data-ride="carousel" data-interval="6000">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    {this.state.loading  || !this.state.carouselData ? (<div>loading...</div>) : (<div class="carousel-inner">
                            <div class="carousel-item active" style={{backgroundImage: 'url('+this.state.carouselData[0].picture+')'}}>
                                <div class="info_container pl-5">
                                    <span>{this.state.carouselData[0].loc}</span>
                                    <h2>{this.state.carouselData[0].title}</h2>
                                    <p class="animated_text pl-3 pr-3">{this.state.carouselData[0].desc}</p>
                                    <Link to="/tours">Dive in!</Link>
                                </div>    
                            </div>
                            <div class="carousel-item" style={{backgroundImage: 'url('+this.state.carouselData[1].picture+')'}}>
                                <div class="info_container pl-5">
                                    <span>{this.state.carouselData[1].loc}</span>
                                    <h2>{this.state.carouselData[1].title}</h2>
                                    <p class="animated_text pl-3 pr-3">{this.state.carouselData[1].desc}</p>
                                    <Link to="/tours">Dive in!</Link>
                                </div>    
                            </div>
                            <div class="carousel-item" style={{backgroundImage: 'url('+this.state.carouselData[2].picture+')'}}>
                                <div class="info_container pl-5">
                                    <span>{this.state.carouselData[2].loc}</span>
                                    <h2>{this.state.carouselData[2].title}</h2>
                                    <p class="animated_text pl-3 pr-3">{this.state.carouselData[2].desc}</p>
                                    <Link to="/tours">Dive in!</Link>
                                </div>    
                            </div>
                    </div>)}
            </div>
        )
    }
}  

export default Carousel;