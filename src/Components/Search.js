import React from "react";

const pages = ["home", "comments", "places", "tours"];


export function Search(){
    const [searchTour, setSearchTour] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const input = document.querySelector('#input');

    

    const handleChange = e => {
        setSearchTour(e.target.value);   
        if(input.value == 0){
            document.querySelector('#hide').style.display = "none";
        }else{
            document.querySelector('#hide').style.display = "block";
        }   
    };   

   
    

    React.useEffect(() => {
        const results = pages.filter(tour =>
            tour.toLowerCase().includes(searchTour)
        );
        setSearchResults(results);
        }, [searchTour]);
        
       

        const hide = "hide";
         
        return   <div class="search_container"> 
                    <form>
                        <input id="input" type='text' placeholder='Search...' value={searchTour}
                        onChange={handleChange}></input>
                        <ul id={hide}> 
                            {searchResults.map(item => (
                                <li><a href={"/"+item}>{item}</a></li>
                            ))}
                        </ul> 
                    </form>
                    {/*}<div class="add_info_container">
                        <div class="info_block"><h4>Best Price Guarantee</h4><p>A small river Duden flows by their place and suplies</p></div>
                        <div class="info_block"><h4>Travellers Love Us</h4><p>A small river Duden flows by their place and suplies</p></div>
                        <div class="info_block"><h4>Best Travel Agent</h4><p>A small river Duden flows by their place and suplies</p></div>
                        <div class="info_block"><h4>Our Dedicated Support</h4><p>A small river Duden flows by their place and suplies</p></div>
                        <div class="info_block"><h4>Best Price Guarantee</h4><p>A small river Duden flows by their place and suplies</p></div>
                        <div class="info_block"><h4>Travellers Love Us</h4><p>A small river Duden flows by their place and suplies</p></div>
                    </div>*/}

                </div>
} 