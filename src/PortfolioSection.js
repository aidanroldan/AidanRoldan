import { Card, Row, Col, Container } from 'react-bootstrap';
import LMS from './lms.png';
import AF from './arduino.jpg'

function PortfolioSection() {
  return (
    <Container>
      <h2>My Portfolio</h2>
      <Row>
        {/* Repeat for each item in your portfolio */}
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src={LMS} />
            <Card.Body>
              <Card.Title>LMS</Card.Title>
              <Card.Text>
                Loan Managment System is a tool developed for a private client in order to manage his cash advance business. 
                Database and site both hosted on AWS Ec2.
                 Functionality includes, reating loans with different interest criteria, add and modifying payments was a big part of this project as the world of debts can be
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={AF} />
            <Card.Body>
              <Card.Title>Arduino Friends</Card.Title>
              <Card.Text>
                Arduino friends was a fairly simple project which I had a lot of fun doing. It started around with me seeing
                how cheap 128x64 OLED screens were, after finding out they can be had for about 90 cents from china I thought there had 
                to be some way to utilize these little displays. I landed on a sort of "robot" device. This device would essentially be 

                 </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            
            <Card.Body>
              <Card.Title>Turbo Trades</Card.Title>
              <Card.Text>
                Turbo trades is a project my partner and I started in late 2023. It is a marketplace for tuner cars and car parts.
                The idea for TurboTrades came from my love of cars and facebook marketplace. We all now facebook marketplace is a great place to get a 
                used couch, but for cars and car parts, the facebook search queries and filtering can often make looking for what you need extremely difficult.
                Despite this problem, Facebook Marketplace is still the go-to for cars and parts. We decided to create an online marketplace, with integrated
                messaging, accounts with rep score, and proper filtering, all from the perspective of an avid car enthusiat. For obvious reasons, I would prefer not to 
                add a picture of our current UI, but it is a project we work on pretty consistently, and hope to take over the used tuner car and car part market.
                 </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={4}>
          <Card>
            
            <Card.Body>
              <Card.Title>Moe's Kiosk</Card.Title>
              <Card.Text>
                The "Wheel" was one of my biggest contributions to my current employer. I dealt with the physical packaging of the entire kiosk device. 
                From surface level, it can look very simple, but there are many aspects which had to be custom made for our application. For example, 
                the biggest part of the packaging was the bezel
                 </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        

        {/* ... */}
      </Row>
    </Container>
  );
}
export default PortfolioSection;