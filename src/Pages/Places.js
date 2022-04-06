import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aside from "../Components/Aside";

export class Places extends Component{
    state = {
        loading: true,
        places: null
    };

    async componentDidMount(){
        const url = "/data/places-db.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({places: data.places, loading: false});
    }
    render(){
        return (
            <div calss="wrapper">
                <Aside />  
                <div class="places_container">
                    {this.state.loading || !this.state.places ? (<div>loading</div>) : (<div class="best_places">  
                        {this.state.places.map(placesItem =>
                            <div class="places_item" style={{backgroundImage: "url("+placesItem.picture+")"}}>
                                <div class="content">
                                    <h2>{placesItem.loc}</h2>
                                    <p>
                                        {placesItem.desc}
                                    </p>
                                    <button class="btn-outline-info btn_places"><Link to="/tours">Dive in!</Link></button> 
                                </div>
                            </div>
                        )} 
                    </div>)}
                </div>
            </div>
        )
    }
}





export default Places;