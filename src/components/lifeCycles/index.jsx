import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbo from "../header/jumbo.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import './style.css';
const LifeCycle = () => {
  return (
    <>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <h1>Life Cycles</h1>
          <footer className="blockquote-footer">
            <medium className="text-muted">
              The Three Stages Of A Component
            </medium>
          </footer>
        </blockquote>
      </Card>

      <Container>
        <Row id='lcc'>
          <Col>
            <Row>
              <Card
                bg={"info"}
                text={"white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>Mounting</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col><Card
          bg={"warning"}
          text={"white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Updating</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make
              up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>
          <Col><Card
          bg={"success"}
          text={"white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Unmounting</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make
              up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card></Col>
        </Row>
      </Container>
    </>
  );
};

export default LifeCycle;
