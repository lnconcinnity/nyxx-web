
import { ReactNode, RefObject, useRef } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import InkSplatter1 from "../assets/images/ink-splatter-1.png";
import NyxxSelfie1 from "../assets/images/photos/selfie-1.png";
import NyxxSelfie2 from "../assets/images/photos/selfie-2.jpg";
import NyxxSelfie3 from "../assets/images/photos/selfie-3.jpg";
import TempImage from "../assets/images/photos/temp-headshot.png"
import MirrorShotSelfie1 from "../assets/images/photos/mirror-shot.jpg"
import PiercingsImage1 from "../assets/images/photos/piercings-1.jpg"
import PiercingsImage2 from "../assets/images/photos/piercings-2.jpg"
import TattooImage1 from "../assets/images/photos/tattoo-1.jpg"

import { ReactComponent as Logo} from '../assets/images/brand.svg';

import ParallaxMask from "../components/ParallaxMask";

import useFetch from "../hooks/useFetch";
import useAnimateIn from "../hooks/useAnimateIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ABOUT_ME_ENTRANCE_ANIMATION_NAME = 'fly-horizontal-in-1s-easeOut-inverted'
const CAROUSEL_INTERVAL = (8/3)*1000

const Landing = () => {
    const aboutMeHeaderRef = useRef<HTMLHeadingElement>(),
        aboutMeText1Ref = useRef<HTMLParagraphElement>(),
        aboutMeText2Ref = useRef<HTMLParagraphElement>(),
        aboutMeText3Ref = useRef<HTMLParagraphElement>(),
        aboutMeAutoBiographyLink = useRef<HTMLAnchorElement>();
    const [shared] = useFetch(`${process.env.PUBLIC_URL}/shared.json`, { method: "GET", mode: "same-origin" })
    useAnimateIn(190, ABOUT_ME_ENTRANCE_ANIMATION_NAME, aboutMeHeaderRef);
    useAnimateIn(210, ABOUT_ME_ENTRANCE_ANIMATION_NAME, aboutMeText1Ref);
    useAnimateIn(300, ABOUT_ME_ENTRANCE_ANIMATION_NAME, aboutMeText2Ref);
    useAnimateIn(390, ABOUT_ME_ENTRANCE_ANIMATION_NAME, aboutMeText3Ref);
    useAnimateIn(700, ABOUT_ME_ENTRANCE_ANIMATION_NAME, aboutMeAutoBiographyLink);

    const constructPortfolioJumbotron = (position: "left" | "right", imageElement: ReactNode, children: ReactNode) => {
        const imageContainer = (
            <div style={{boxShadow: "0px 5px 10px rgba(28, 28, 28, 0.125)", height: "100%", width: "100%"}}>
                { imageElement }
            </div>
        )
        const isLeft = position === "left"
        return (
            <Row className="portfolio-section" style={{height: "75vh"}}>
                <Col className="d-flex flex-column justify-content-center align-items-center p-0">
                    {
                        isLeft ? children : imageContainer
                    }
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center p-0">
                    {
                        isLeft ? imageContainer : children
                    }
                </Col>
            </Row>
        )
    }

    return (
        <div className="w-100 fade-in-1s-easeInOut">
            <div className="d-lg-none d-block position-absolute w-100" style={{backgroundColor: "rgb(255, 255, 255)", height: "85%", boxShadow: "0px 10px 8px rgba(28, 28, 28, 0.075)"}}></div>
            <Container>
                <Row lg={6}>
                    <Col lg={6} className="d-flex flex-column justify-content-lg-center justify-content-start align-items-center py-lg-0" style={{height: '675px', paddingTop: "16%"}}>
                        <h1 className="roboto-light landing-jumbotron-header fly-horizontal-in-1s-easeOut-inverted text-lg-start text-center">
                            AVA MARIENNE DAYRIT
                        </h1>
                        <div className="d-flex flex-column justify-content-lg-end justify-content-center align-items-center">
                            <p className="roboto-thin landing-jumbotron-text fly-horizontal-in-1s-easeOut-500ms-inverted text-lg-start text-center">
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
                    {/*<Col lg={6} className="d-lg-none d-flex flex-column justify-content-start align-items-center" style={{height: '675px'}}>
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
                    </Col>*/}
                    <Col lg={6} className="d-flex flex-column" style={{height: '675px'}}>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <ParallaxMask className="position-absolute" translateY={["-150px", "150px", 'easeInOutQuad']} speed={10}>
                                <img src={NyxxSelfie1} alt="NyxxSelfie1" style={{width: "100%", height: "100%", objectFit: "contain", zIndex: -1, position: 'absolute'}} className=""/>
                            </ParallaxMask>
                            <div style={{position: 'relative', width: '70%', height: '70%'}}>
                                <ParallaxMask className="position-absolute" translateY={["-250px", "250px", 'easeInOutQuad']} speed={10} style={{zIndex: -1}}>
                                    <img src={InkSplatter1} className="inksplatter-container" alt="InkSplatter1" style={{width: "285%", height: "285%", objectFit: "contain", zIndex: -2, position: 'absolute', transform: "translate(-28%, -22.5%)"}}/>
                                </ParallaxMask>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row xl={6} className="about-me-section" style={{boxShadow: "0px 10px 8px rgba(28, 28, 28, 0.075)"}}>
                <Col xl={6} style={{height: "100%"}} className="d-flex flex-column justify-content-center align-items-start">
                    <Container fluid style={{padding: "25%", height: "100%"}} className="align-items-start text-lg-start text-start">
                        <h1 className="roboto-light about-me" ref={aboutMeHeaderRef as RefObject<HTMLHeadingElement>}> ABOUT ME </h1>
                        <p className="roboto about-me-text" ref={aboutMeText1Ref as RefObject<HTMLHeadingElement>}>
                            During my childhood, I was deeply influenced and fascinated by various forms of art. Unfortunately, I couldn't express my passion openly because my mother disapproved, so I kept it hidden from her. I would secretly sketch in my notebook and immerse myself in art books. Now, as a teenager, I have the freedom to pursue and express what I love without any obstacles.
                        </p>
                        <p className="roboto about-me-text" ref={aboutMeText2Ref as RefObject<HTMLHeadingElement>}>
                            Having proven my responsibility and with my own business established, I have gained the trust and independence I once lacked. This newfound freedom allows me to openly share my experiences and my art with others, hoping to inspire them in some way. Sharing my journey from the constraints of my childhood to the liberation I now experience is something I cherish.
                        </p>
                        <p className="roboto about-me-text" ref={aboutMeText3Ref as RefObject<HTMLHeadingElement>}>
                        Being able to finally embrace my passion for art and share it with others brings me immense delight and joy. Each time I exhibit my work, I feel a sense of fulfillment that words can hardly describe. I hope that by sharing my journey, I can encourage others to pursue their passions, regardless of the obstacles they may face.
                        </p>
                        <a href={`${shared !== null ? (shared as any)["autobiography-link"] : "#"}`} target="_blank" rel="noreferrer" className="background-slide slide-text-light bordered-slide" ref={aboutMeAutoBiographyLink as RefObject<HTMLAnchorElement>}><span>Read more about me here!</span></a>
                    </Container>
                </Col>
                <Col xl={6} className="d-xl-flex d-none flex-column justify-content-center align-items-center">
                    <Container fluid style={{padding: "20%"}}>
                        <div style={{overflow: "hidden", height: "700px", width: "100%"}}>
                            <img src={TempImage} alt="TempHeadshot" style={{objectFit: "contain", height: "100%", width: "100%"}}/>
                        </div>
                    </Container>
                </Col>
            </Row>
            {
                constructPortfolioJumbotron("right", (
                    <div className="w-100 h-100">
                        <Carousel indicators touch controls={false} wrap>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${MirrorShotSelfie1})`, backgroundPosition: "0px 15%", backgroundSize: "100% 140%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${NyxxSelfie2})`, backgroundPosition: "0px 7.5%", backgroundSize: "100% 160%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${NyxxSelfie3})`, backgroundPosition: "0px 100%", backgroundSize: "100% 170%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                ), (
                    <div style={{padding: "5%"}}>
                        <p className="roboto-bold portfolio-text-header" style={{letterSpacing: "5px"}}>MODELLING</p>
                        <p className="roboto-medium portfolio-text-body" style={{letterSpacing: "5px", color: "rgb(120, 120, 120)"}}>INTERN MODEL</p>
                        <p className="roboto-light mx-3 portfolio-text-body" style={{marginTop: "20px"}}>As earlier detailed, I strive and aim to be a model or fashionista in the near future, as it is one of my goals in life. As such I have enlisted myself in a modelling studio-school.</p>
                        <p className="roboto-thin mx-4 portfolio-text-quote" style={{marginTop: "2px"}}><i>Your aura is as enchanting as the swirling stars in Van Gogh's "Starry Night"<sub> ~ Z. P.</sub></i></p>
                        <a href="https://www.facebook.com/profile.php?id=100073382471096" target="_blank" rel="noreferrer" className="inquiry-link mx-1 portfolio-link">
                            <span className="context-text roboto-thin">Need to expose your product out there? Inquire me at cameo here </span>
                            <span className="hover-indicator roboto-light"> &gt;&gt; </span>
                        </a>
                    </div>
                ))
            }
            {
                constructPortfolioJumbotron("left", (
                    <div className="w-100 h-100">
                        <Carousel indicators touch controls={false} wrap>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${PiercingsImage1})`, backgroundPosition: "0px 5%", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${PiercingsImage2})`, backgroundPosition: "0px 7.5%", backgroundSize: "100% 160%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                ), (
                    <div style={{padding: "5%"}}>
                        <p className="roboto-bold portfolio-text-header" style={{letterSpacing: "5px"}}>BODY PIERCING</p>
                        <p className="roboto-medium portfolio-text-body" style={{letterSpacing: "5px", color: "rgb(120, 120, 120)"}}>ADVANCED SERVICE</p>
                        <p className="roboto-light portfolio-text-body">Book yourself an appointment with me with agendas such as piercing treatment and safety, customizability and whatnot already included.<br /><sub className="roboto-thin">I will not perform complex piercing that involves vital areas of the body in due concern of safety and practices.</sub></p>
                    </div>
                ))
            }
            {
                constructPortfolioJumbotron("right", (
                    <div className="w-100 h-100">
                        <Carousel indicators touch controls={false} wrap>
                            <Carousel.Item interval={CAROUSEL_INTERVAL}>
                                <div style={{width: "100%", height: "75vh", background: `url(${TattooImage1})`, backgroundPosition: "0px 50%", backgroundSize: "100% 180%", backgroundRepeat: "no-repeat"}}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                ), (
                    <div style={{padding: "5%"}}>
                        <p className="roboto-bold portfolio-text-header" style={{letterSpacing: "5px"}}>TATTOOING</p>
                        <p className="roboto-medium portfolio-text-body" style={{letterSpacing: "5px", color: "rgb(120, 120, 120)"}}>NOVICE SERVICE</p>
                        <p className="roboto-light portfolio-text-body">Book yourself an appointment with me for tattooing, details such as price and tattoo art are to be discussed once booked.<br /><sub className="roboto-thin">Price usually is calcuated per square inch, but other ammedities and concerns may add variation.</sub></p>
                    </div>
                ))
            }
            <footer style={{height: "35vh", backgroundColor: "rgb(21, 21, 21)", padding: "2% 5%"}} className="w-100 d-flex flex-column justify-content-between">
                <Container className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col className="d-flex flex-column footer-socials d-flex flex-column justify-content-center align-items-center">
                            <Logo />
                            <span style={{color: "rgb(245, 245, 245)", letterSpacing: "5px", fontSize: "25px", marginTop: "15px", lineHeight: "20px"}} className="roboto-bold">NYXX</span>
                            <span style={{color: "rgb(245, 245, 245)", letterSpacing: "2px"}} className="roboto-thin">Modelling & Body Art Services</span>
                        </Col>
                        <Col className="d-flex flex-column footer-socials">
                            <p className="roboto-bold w-100 text-center" style={{color: "rgb(198, 198, 198)", letterSpacing: "2px"}}>SOCIALS</p>
                            <a href="https://www.instagram.com/ringed_freak/" target="_blank" rel="noreferrer" className='socmed-link text-center roboto-medium instagram'><FontAwesomeIcon icon={faInstagramSquare} className="socmed-link-image" /> <span className="context-text">Instagram</span></a>
                            <a href="https://www.facebook.com/profile.php?id=100073382471096" target="_blank" rel="noreferrer" className='socmed-link text-center roboto-medium facebook'><FontAwesomeIcon icon={faFacebook} className="socmed-link-image" /> <span className="context-text">Facebook</span></a>
                            <a href="https://www.instagram.com/ringed_freak/" target="_blank" rel="noreferrer" className='socmed-link text-center roboto-medium linkedin'><FontAwesomeIcon icon={faLinkedin} className="socmed-link-image" /> <span className="context-text">LinkedIn</span></a>
                        </Col>
                        <Col className="d-flex flex-column footer-socials">
                            <p className="roboto-bold w-100 text-center" style={{color: "rgb(198, 198, 198)", letterSpacing: "2px"}}>CONTACT ME</p>
                        </Col>
                    </Row>
                </Container>
                <span className="w-100 text-center" style={{color: "rgb(210, 210, 210)"}}>Copyright © 2024 Nyxx. Made by lnconcinnity.</span>
            </footer>
        </div>
    )
}

export default Landing;