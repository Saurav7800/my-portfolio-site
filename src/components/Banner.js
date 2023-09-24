import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const toRotate = ["Web Developer", "App Developer", "UI/UX Designer", "GIS Developer", "DevOps Engineer", "Digital Marketer"];
    const [text, setText] = useState(toRotate[0]); // Start with the first title

    useEffect(() => {
        const ticker = setInterval(() => {
            let nextTitleIndex = (currentTitleIndex + 1) % toRotate.length;
            setText(toRotate[nextTitleIndex]);
            setCurrentTitleIndex(nextTitleIndex);
        }, 1000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(ticker);
    }, [currentTitleIndex, toRotate]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={6} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Saurav! "}<span className="wrap">{text}</span></h1>
                        <p>Hey there! I'm Saurav Mohan Sathawane, dedicated and self-motivated individual. Ever wondered where AWS's vast skies meet the precision of GIS or where the allure of frontend design fuses with the power of backend logic? That's where I come in. Here, you'll find a blend of cloud journeys, cartographic tales, and code adventures. Curious? Dive in, and let's craft the next digital marvel together!</p>
                        <button onClick={() => window.location.href="mailto:sauravsathawane64@gmail.com?subject=Let's Connect"}>
                          Let's Connect<ArrowRightCircle size={25} />
                      </button>

                    </Col>
                    <Col xs={6} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
