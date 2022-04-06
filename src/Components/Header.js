import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


export class Header extends Component {
    
    state = {
        storage: sessionStorage.getItem("UserName"),
        isActive: false    
    }
    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
    render() {
        const isActive = this.state.isActive;
        return(
            <nav class="navbar navigation">
                <button onClick={this.handleToggle} className={isActive ? "navbar-toggler header_burger active" : 'navbar-toggler header_burger'} type="button" data-toggle="collapse" data-target="#navbarContainer">
                    <span className={isActive ? "header_burger_span active" : 'header_burger_span'}></span>
                </button>
                <span class="name text-info">travel-app</span> 
                <span class='user_name text-info  '>User: <i>{this.state.storage}</i></span>

                <div class="collapse navbar-collapse justify-content-end bg-dark pt-3 pb-3" id="navbarContainer">    
                    <ul class="navbar-nav container-md">
                        <li class="nav-item mr-5 ml-3">
                            <span class="nav-link text-info"><Link to="/">Home</Link></span>
                        </li>
                        <li class="nav-item mr-5 ml-3">
                            <span class="nav-link text-info"><Link to="/places">Best Places</Link></span>
                        </li>
                        <li class="nav-item mr-5 ml-3">
                            <span class="nav-link text-info"><Link to="/comments">Comments</Link></span>
                        </li>
                        <button type="button" class="btn btn-info ml-3 button-log"><Link to="/auth">Log in</Link></button>
                    </ul>
                </div>
            </nav>
            
        )
    }
}

export default Header;    