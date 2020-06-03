import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Admin: React.FC = () => {
    return (
        <div>
            <Card bg="dark" text="white" style={{ marginTop: "5%" }}>
                <Card.Body>
                    <Card.Title>
                        <Form>
                            <Form.Group controlId="post">
                                <Form.Control as="textarea" size="lg" rows={5} placeholder="What's happening?" />
                            </Form.Group>
                            <Button variant="light" type="submit" size="lg" block>
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
