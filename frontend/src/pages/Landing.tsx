
import React, { RefObject, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import InkSplatter1 from "../assets/images/ink-splatter-1.png";
import NyxxSelfie1 from "../assets/images/photos/selfie-1.png";
import TempImage from "../assets/images/photos/temp-headshot.png"

import ParallaxMask from "../components/ParallaxMask";
import useScroll from "../hooks/useScroll";
import ResponsiveLineBreak from "../components/ResponsiveLineBreak";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Landing = () => {
    const [scroll] = useScroll();
    const aboutMeHeaderRef = useRef<HTMLHeadingElement>(),
        aboutMeText1Ref = useRef<HTMLHeadingElement>(),
        aboutMeText2Ref = useRef<HTMLHeadingElement>();
    useEffect(() => {
        if (scroll[1] > 190)  {
            if (aboutMeHeaderRef.current) {
                aboutMeHeaderRef.current.classList.remove('d-none');
                aboutMeHeaderRef.current.classList.add('fly-horizontal-in-1s-easeOut-inverted');
            }
            if (aboutMeText1Ref.current) {
                aboutMeText1Ref.current.classList.remove('d-none');
                aboutMeText1Ref.current.classList.add('fly-horizontal-in-1s-easeOut-inverted');
            }
            if (aboutMeText2Ref.current) {
                aboutMeText2Ref.current.classList.remove('d-none');
                aboutMeText2Ref.current.classList.add('fly-horizontal-in-1s-easeOut-inverted');
            }
        }
    }, [scroll])
    return (
        <div className="w-100 fade-in-1s-easeInOut">
            <Container>
                <Row lg={6}>
                    <Col lg={6} className="d-lg-flex d-none flex-column justify-content-center" style={{height: '675px'}}>
                        <h1 className="roboto-light landing-jumbotron-header fly-horizontal-in-1s-easeOut-inverted">
                            AVA MARIENNE DAYRIT
                        </h1>
                        <div className="d-flex flex-column justify-content-end align-items-center">
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
                            <ParallaxMask className="position-absolute" translateY={["-150px", "150px", 'easeInOutQuad']} speed={10}>
                                <img src={NyxxSelfie1} alt="NyxxSelfie1" style={{width: "100%", height: "100%", objectFit: "contain", zIndex: -1, position: 'absolute'}} className=""/>
                            </ParallaxMask>
                            <div style={{position: 'relative', width: '70%', height: '70%'}}>
                                <ParallaxMask className="position-absolute" translateY={["-250px", "250px", 'easeInOutQuad']} speed={10} style={{zIndex: -2}}>
                                <img src={InkSplatter1} alt="InkSplatter1" style={{width: "285%", height: "285%", objectFit: "contain", zIndex: -2, position: 'absolute', transform: "translate(-28%, -27%)"}}/>
                                </ParallaxMask>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row xl={6} style={{backgroundColor: "rgb(21, 21, 21)", zIndex: 3, position: "relative"}}>
                <Col xl={6} style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items center">
                    <Container fluid style={{padding: "25%"}}>
                        <h1 className="roboto-light about-me d-none" style={{color: "rgb(245, 245, 245)"}} ref={aboutMeHeaderRef as RefObject<HTMLHeadingElement>}> ABOUT ME </h1>
                        <p className="roboto about-me-text d-none" ref={aboutMeText1Ref as RefObject<HTMLHeadingElement>}>
                            During my childhood, I was deeply influenced and fascinated by various forms of art. Unfortunately, I couldn't express my passion openly because my mother disapproves, so I kept it hidden from her.
                        </p>
                        <p className="about-me-text d-none" ref={aboutMeText2Ref as RefObject<HTMLHeadingElement>}>
                            Now, as a teenager, I have the freedom to pursue and express what I love without any obstacles. Having proven my responsibility and with my own business established, I can share my experiences with others, hoping to inspire them in some way. Additionally, being able to share my art with others brings me in delight and joy.
                        </p>
                        <ResponsiveLineBreak xl />
                        <h5 className="roboto-light px-3" style={{color: "rgb(220, 220, 220)"}}>Want to chat or inquire about somethin'?</h5>
                        <p className="roboto-light px-4" style={{color: "rgb(180, 180, 180"}}>Call me or text me at <FontAwesomeIcon icon={faTelegram} className="contect-mobile" /> +63 923 421 2240</p>
                        <p className="roboto-light px-4" style={{color: "rgb(180, 180, 180"}}>Mail my <a href="mailto:ava.dayrit@example.com" target="_top" rel="no-referrer" className="contect-email"><FontAwesomeIcon icon={faEnvelope} /> ava.dayrit@example.com</a> </p>
                    </Container>
                </Col>
                <Col xl={6} className="d-xl-block d-none">
                    <Container fluid style={{padding: "25%"}}>
                        <img src={TempImage} alt="TempHeadshot" style={{objectFit: "contain"}} className="w-100 h-100" />
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Landing;