import React, { lazy } from "react";

import { IPost } from "./Post";

const Post = lazy(() => import('./Post'));

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
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591154382222,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591147354222,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591136330000,
        },
        {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591126330000,
        },
    ];

    return (
        <>
            {Posts.map((post: IPost, index) => (
                <div  key={index} style={{ marginBottom: "5%" }}>
                    <Post {...post} />
                </div>
            ))}
        </>
    )
};

export default Posts;
