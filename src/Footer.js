import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header className="title" style={{ fontWeight: '500', fontSize: "1.4rem", color: 'black' }}>Featured</Card.Header>
                <Card.Body className="title" >
                    <Card.Title className="title" >Special title treatment</Card.Title>
                    <Card.Text>
                        Thank you for Visiting.
    </Card.Text>
                    <Button variant="danger">Back to Top</Button>
                </Card.Body>
                <Card.Footer className="text-muted ">s ago</Card.Footer>
            </Card>


            {/* <div className="card">
                <div className="alignText">
                    <header className="title card-header" style={{ fontWeight: '500', fontSize: "1.4rem", color: 'black' }}>Featured</header>
                    <div className="title">
                        <div className="title">
                            Special title treatment
                        </div>
                        <p className="title">
                            Thank you for Visiting.
        </p>
                        <button className="">

                        </button>

                    </div>



                </div>
            </div> */}
        </div>
    )
}
