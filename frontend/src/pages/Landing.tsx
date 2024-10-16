
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import InkSplatter1 from "../assets/images/ink-splatter-1.png"
import NyxxSelfie1 from "../assets/images/photos/selfie-1.png";

const Landing = () => {
    return (
        <div className="w-100 fade-in-1s-easeInOut">
            <Container>
                <Row lg={6}>
                    <Col lg={6} className="d-lg-flex d-none flex-column justify-content-center" style={{height: '675px'}}>
                        <h1 className="roboto-light landing-jumbotron-header fly-horizontal-in-1s-easeOut-inverted">
                            AVA MARIENNE DAYRIT
                        </h1>
                        <div className="d-flex flex-column justify-content-center align-items-center">
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
                    <Col lg={6} className="d-lg-none d-flex flex-column justify-content-start align-items-center" style={{height: '675px'}}>
                        <div className="d-flex flex-column justify-content-center" style={{transform: "translateY(100%)"}}>
                            <h1 className="roboto-light landing-jumbotron-header fly-horizontal-in-1s-easeOut-inverted text-center">
                                AVA MARIENNE DAYRIT
                            </h1>
                            <p className="roboto-thin landing-jumbotron-text fly-horizontal-in-1s-easeOut-500ms-inverted text-center">
                                Art is like a canvas, and our body is one of them
                            </p>
                            <div className="d-flex justify-content-center">
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
                    <Col lg={6} className="d-flex flex-column" style={{height: '675px'}}>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <img src={NyxxSelfie1} alt="NyxxSelfie1" style={{width: "100%", height: "100%", objectFit: "contain", zIndex: 1, position: 'absolute'}} className="fly-horizontal-in-1s-easeOut-0s-normal"/>
                            <div style={{position: 'relative', width: '70%', height: '70%'}}>
                                <img src={InkSplatter1} alt="InkSplatter1" style={{width: "285%", height: "285%", objectFit: "contain", zIndex: -1, position: 'absolute', transform: "translate(-28%, -27%)"}}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row lg={6} style={{backgroundColor: "rgb(21, 21, 21)", zIndex: 2}}>
                <Col lg={6} style={{height: "125vh"}}>
                </Col>
            </Row>
        </div>
    )
}

export default Landing;