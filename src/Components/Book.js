import React, { Component } from "react"; 

export class Book extends Component{
    state = {
        loading: true,
        firstPicture: '/images/australia2.jpg',
        book: null
    };
    
    async componentDidMount(){   
        const url = "/data/book-db.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({book: data.booking, loading: false});
    }

        render(){
            return (
            <div class="wrapper_book">
                <div class="book_container">
                    <div id="bookSlider" class="carousel slide" data-ride="carousel">
                        {this.state.loading  || !this.state.book ? (<div>loading...</div>) : (<div class="carousel-inner">
                            <div class="carousel-item active book_item">
                                <img src={this.state.firstPicture} />  
                                <h3>Australia</h3>
                                    <div class="book_info_holder">
                                        <h5><i>Location:</i> Lorem inpsum dolor sit amet</h5>
                                        <span>$2500/week</span>
                                        <h5><i>GPS:</i> N48°22'60` E20°60`</h5>
                                    </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dignissimos autem reiciendis ducimus, fugiat eaque nostrum assumenda? Doloribus numquam adipisci excepturi voluptas maiores, quisquam hic pariatur officiis minima sint illo! Consequuntur eos asperiores architecto minus culpa suscipit dolorem facilis reprehenderit, nemo distinctio? Mollitia temporibus, quaerat excepturi dolorem repudiandae deleniti facere necessitatibus porro at placeat recusandae asperiores doloremque modi dicta magni!</p>
                            </div>
                            {this.state.book.map(bookItem =>  
                                <div class="carousel-item book_item"> 
                                    <img src={bookItem.picture} />
                                    <h3>{bookItem.title}</h3>
                                        <div class="book_info_holder">
                                            <h5><i>Location:</i> {bookItem.place}</h5>
                                            <span>{bookItem.price}</span>
                                            <h5><i>GPS:</i> {bookItem.loc}</h5>
                                        </div>
                                    <p>{bookItem.text}</p>
                                </div>
                            )}
                        
                        </div>)}

                        <a class="carousel-control-prev prev-slide-book" href="#bookSlider" data-slide="prev">
                            <span class="carousel-control-prev-icon prev-book"></span>
                        </a>
                        <a class="carousel-control-next next-slide-book" href="#bookSlider" data-slide="next">
                             <span class="carousel-control-next-icon next-book"></span>
                        </a>
                   </div>
                </div>
            </div>)
        }
}  

 
export default Book; 