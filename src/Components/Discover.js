import React, { Component } from "react";



export class Discover extends Component{
    state = {
        loading: true,
        discoverData: null
    };
    
    async componentDidMount(){   
        const url = "/data/discover-db.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({discoverData: data.discover, loading: false});
    }
    render(){
        return(
            <div id="discoverCarousel" class="carousel slide" data-ride="carousel" data-interval="6000">
                    {this.state.loading  || !this.state.discoverData ? (<div>loading...</div>) : (<div class="carousel-inner">
                        {this.state.discoverData.map(discoverItem =>
                            <div class="carousel-item discover-item active">
                                <div class="info_container discover_info pl-5">
                                    <img src={discoverItem.picture} class="discover_image"></img>
                                    <h2 class="discover_heading">{discoverItem.title}</h2>
                                    <p class="discover_text pl-3 pr-3">{discoverItem.desc}</p>
                                </div>    
                            </div>)}
                    </div>)}
            </div>
        )
    }
}  

export default Discover; 