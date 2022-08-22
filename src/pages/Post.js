import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db,auth } from "../firebase";
import {useNavigate} from 'react-router-dom';

function Post({isAuth}) {
  let navigate= useNavigate();
  const [title,settitle]=useState("");
  const[posttext,setposttext]=useState("");
  
  const postCollectionRef=collection(db,"post")

  const createpost =async()=>{
    await addDoc(postCollectionRef ,{title,posttext,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid
    }});
    navigate("/");


  }
  useEffect(()=>{
    if(!isAuth) {
      navigate("/login");
    }

  } ,[] ) ;

  return (
    <div className="createpostpage">
      <div className="cpcontainer">
        <h1>post is here</h1>
        <div className="inputgp">
          <label>title:</label>
          <input placeholder='="Title..' onChange={(event)=>{settitle(event.target.value)}} />
          <div className="inoutgp">
            <label>post:</label>
            <input placeholder="post.." onChange={(event)=>{setposttext(event.target.value)}} />
          </div>
        </div>

        <button onClick={createpost}>submit post</button>
      </div>
    </div>
  );
}

export default Post;
