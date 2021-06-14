import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = (props)=> {
    return (
        <>
        <Jumbotron fluid id="h-c">
        <Container>
          <h1>{props.JHeader}</h1>
          <p>
            {props.JContent}
          </p>
        </Container>
      </Jumbotron>
        </>
    )

    
}
export default Jumbo;