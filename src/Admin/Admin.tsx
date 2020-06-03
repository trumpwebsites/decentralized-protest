import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { IPost } from '../Posts/Post';

const Admin: React.FC = () => {
    // Function using fetch to POST to our API endpoint
    const onCreatePostClick = () => {
        console.log("helllo")
        function createPost(data) {
            return fetch('/.netlify/functions/post-create', {
            body: JSON.stringify(data),
            method: 'POST'
            }).then(response => {
                console.log(response)
            // return response.json()
            })
        }
        
        // Post data
        const myPost: IPost = {
            user: "Brandon In",
            message: "The Revolution Will Not Be Televised.",
            time: 1591158839000,
        }
        
        // create it!
        createPost(myPost).then((response) => {
            console.log('API response', response)
            // set app state
        }).catch((error) => {
            console.log('API error', error)
        })
    }

    return (
        <div>
            <Card bg="dark" text="white" style={{ marginTop: "5%" }}>
                <Card.Body>
                    <Card.Title>
                        <Form>
                            <Form.Group controlId="post">
                                <Form.Control as="textarea" size="lg" rows={5} placeholder="What's happening?" />
                            </Form.Group>
                            <Button variant="light" size="lg" onClick={onCreatePostClick} block>
                                Submit
                            </Button>
                        </Form>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Admin;
