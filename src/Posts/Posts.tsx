import React, { lazy, useEffect, useState } from "react";

const Post = lazy(() => import('./Post'));

const Posts: React.FC = () => {
    const [posts, setPosts] = useState([]);
    
    // TODO: Figure out either a websocket, pub/sub or service 
    // long polling mode in order to grab consistent data.
    useEffect(() => {
        const getPosts = async () => {
            const postsResponse = await fetch('/.netlify/functions/post');
            const posts = await postsResponse.json();    
            return setPosts(posts);
        }
        try {
            getPosts();
        } catch(err) {
            console.log('there was an error getting posts');
        }
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
