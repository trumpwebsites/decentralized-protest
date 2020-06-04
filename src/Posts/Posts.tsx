import React, { lazy, useEffect, useState } from "react";

const Post = lazy(() => import('./Post'));

const Posts: React.FC = () => {
    const [posts, setPosts] = useState([]);
    
    // TODO: Figure out either a websocket, pub/sub or service 
    // long polling mode in order to grab consistent data.
    useEffect(() => {
        fetch('/.netlify/functions/post').then((response) => {
            return response.json();
        }).then(response => {
            setPosts(response);
        })
    }, [setPosts]);

    return (
        <>
            {posts.map(({ data: post }, index) => (
                <div  key={index} style={{ marginBottom: "5%" }}>
                    <Post {...post} />
                </div>
            ))}
        </>
    )
};

export default Posts;
