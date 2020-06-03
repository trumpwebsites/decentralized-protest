import React from "react";
import Card from "react-bootstrap/Card";

import Post, { IPost } from "./Post";

const Posts: React.FC = () => {
    const Posts = [
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised. The Revolution Will Not Be Televised. The Revolution Will Not Be Televised.",
            time: 1591159839000,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591158839000,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591157839000,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591156330000,
        },
    ];

    return (
        <>
            {Posts.map((post: IPost, index) => (
                <div style={{ marginBottom: "5%" }}>
                    <Post key={index} {...post} />
                </div>
            ))}
        </>
    )
};

export default Posts;
