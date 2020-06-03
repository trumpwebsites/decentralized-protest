import React from "react";
import Card from 'react-bootstrap/Card';

export interface IPost {
    user: string
    message: string
    time: number
}

const Post: React.FC<IPost> = ({ user, message, time }): any => {
    const timeObject = new Date(time);
    return (
        <Card bg="dark" text="white">
            <Card.Body>
                <Card.Title>
                    {user}
                </Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
                <Card.Text>
                    {`${timeObject.getHours()}:${timeObject.getMinutes()} ${timeObject.toLocaleDateString()}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Post;
