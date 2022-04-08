import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Comments = ({logout}) =>{
    const clearStorage = () =>{
        window.location.reload();
        sessionStorage.clear();
    }  
    const [comment, setComment] = useState(false);
    const [cap, setRecap] = useState([]); 
    const [textArea, setTextarea] = useState('');
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    console.log(date)
    useEffect(() => {
        axios.get("https://travel-app-data.herokuapp.com/comments.php")
          .then(res =>{
              setRecap(res.data) 
          })  
        }, [])

    const handleToggle = () =>{
        setComment(!comment);
    }
    const postComment = () =>{ 
        var bodyFormData = new FormData();
        bodyFormData.append('comment', textArea);
        bodyFormData.append('name',  sessionStorage.getItem("UserName"));
        bodyFormData.append('date', date);

        axios({
            method: 'post',
            url: 'https://travel-app-data.herokuapp.com/comments.php',
            data: bodyFormData,
            config: { headers: {"Content-Type": "multipart/form-data" }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
            alert("Comment successfully added!")
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }

 

 
        return(
            <div class="comments_wrapper">
                <div class="header_comments bg-info">
                    <h3>Comments</h3>
                    <button class="btn add_comment_btn" onClick={handleToggle}>Add comment</button>
                    <a onClick={clearStorage}><button class="btn-outline logout_btn" onClick={logout}>Logout</button></a> 
                </div>
                <div class="comments_container">
                    <div class="comments_holder">
                        {cap.map(com => (<div class="comments_item">
                            <p>
                                <i>{com.comment}</i>
                            </p>
                            <span><i>{com.date}</i></span>
                            <span><i>by</i></span>
                            <span><i>{com.name}</i></span>
                        </div>
                        ))}
                        
                        
                    </div>
                </div>
                <div class={comment ? 'add_comment_container active' : 'add_comment_container'}>
                    <form class="form_comment">
                        <h4>Leave a Comment</h4>
                        <textarea placeholder="Comment..."  value={textArea} onInput={e => setTextarea(e.target.value)}></textarea>
                        <div class="inputs">
                            <input disabled placeholder={sessionStorage.getItem("UserName")}></input>
                            <input disabled placeholder={sessionStorage.getItem("UserEmail")}></input>
                        </div>
                        <button class="btn-outline-info post_btn" onClick={postComment}>Post Comment</button>  
                    </form>
                </div>  
            </div>
        )
}





export default Comments; 