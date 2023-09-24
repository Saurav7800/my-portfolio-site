import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const itemStyle = {
        margin: "10px auto", 
        padding: "10px",
        width: "200px"
    };    

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>In my digital journey, I've dabbled with AWS's expansive suite, crafted stories with React JS and Django, and deciphered geographic tales using OpenLayers. With a palette that includes Python, Java, and the classic web trifecta - HTML, CSS, JavaScript - I'm always ready to paint the next digital masterpiece. Whether it's diving deep into databases, venturing into the vibrant world of digital marketing, or sprinkling some Adobe Photoshop magic, I'm all about blending tech and creativity. Let's explore what we can create together!</p>
                            <Carousel responsive={responsive} infinite={true} className="Skill-slider">
                                <div className="item" style={itemStyle}>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item" style={itemStyle}>
                                    <img src={meter2} alt="Image" />
                                    <h5>Android Development</h5>
                                </div>
                                <div className="item" style={itemStyle}>
                                    <img src={meter3} alt="Image" />
                                    <h5>GIS Development</h5>
                                </div>
                                <div className="item" style={itemStyle}>
                                    <img src={meter1} alt="Image" />
                                    <h5>Cloud Technology</h5>
                                </div>
                                <div className="item" style={itemStyle}>
                                    <img src={meter1} alt="Image" />
                                    <h5>Digital Marketing</h5>
                                </div><div className="item" style={itemStyle}>
                                    <img src={meter2} alt="Image" />
                                    <h5>Graphic Designing</h5>
                                </div>
                            </Carousel>                        
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}
