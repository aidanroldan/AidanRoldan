import { Card, Row, Col, Container } from 'react-bootstrap';

function PortfolioSection() {
  return (
    <Container>
      <h2>My Portfolio</h2>
      <Row>
        {/* Repeat for each item in your portfolio */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-image" />
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
            <Card.Img variant="top" src="path-to-image" />
            <Card.Body>
              <Card.Title>Arduino Friends</Card.Title>
              <Card.Text>
                Arduino friends was a fairly simple project which I had a lot of fun doing.
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