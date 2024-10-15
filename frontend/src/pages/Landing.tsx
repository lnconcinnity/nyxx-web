
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import NyxxSelfie1 from "../assets/images/photos/selfie-1.png";

const Landing = () => {
    return (
        <Container className="w-100 fade-in-1s-easeInOut">
            <Row lg={6}>
                <Col lg={6} className="vh-100 d-flex flex-column justify-content-center">
                    <h1 className="roboto-light landing-jumbotron-header fly-horizontal-in-1s-easeOut-inverted">
                        AVA MARIENNE DAYRIT
                    </h1>
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="roboto-thin landing-jumbotron-text fly-horizontal-in-1s-easeOut-500ms-inverted">
                            Art is like a canvas, and our body is one of them
                        </p>
                        <div className="d-flex">
                        {
                            ['Tattoo Artist', 'Body Piercer', 'Model'].map((text, idx, arr) => (
                                <>
                                <span className={`roboto-thin mx-2 fly-vertical-in-500ms-easeOut-${
                                    `${250*(idx+1)}ms`
                                }-inverted`}> {text} </span>
                                {
                                    arr[idx+1] && (
                                        <hr style={{width: `15px`, marginTop: '10px'}}/>
                                    )
                                }
                                </>
                            ))
                        }
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="vh-100">
                    <img src={NyxxSelfie1} alt="NyxxSelfie1" style={{width: "100%", height: "100%", objectFit: "contain"}} className="fly-horizontal-in-1s-easeOut-0s-normal"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Landing;