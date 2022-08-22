import React, { useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { async } from "@firebase/util";

function Home(isAuth) {
  const [postlists, setpostlist] = useState([]);
  const postCollectionRef = collection(db, "post");
  const deletePost = async (id) => {
    const postdoc = doc(db, "post", id);
    await deleteDoc(postdoc);
  };

  useEffect(() => {
    const getpost = async () => {
      const data = await getDocs(postCollectionRef);
      setpostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getpost();
  },[deletePost] );
  
  return (
    
    <div className="homepage">
      
      {postlists.map((post) => {
        return (
          <div className="post">
            <div className="postHader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
              {isAuth && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.posttext}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
