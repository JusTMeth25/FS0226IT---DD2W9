import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";

function Header() {
  return (
    <Container fluid className="bg-dark text-light text-center mb-3">
      <Row>
        <Col lg={6} className="w-50 text-start">
          <h1>REACT BOOTSTRAP</h1>
        </Col>
        <Col lg={6} className="w-50 text-end">
          <h4>Illustrazione di React Bootstrap</h4>
        </Col>
      </Row>
      <Col className="d-flex justify-content-center">
        <Navigation />
      </Col>
    </Container>
  );
}

export default Header;
