import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Jumbo from './jumbo';
import { Link } from "react-router-dom";

import "./style.css";
const Header = (props) => {
  return (
    <>
      
      <Nav
      justify
      className="justify-content-center"
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link eventKey="link-0" ><Link to="life-cycles">Cycles</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link to="/functional">Functional</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to='/axios'>Axios</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to='/hooks'>Hooks</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to='/'>TBD</Link></Nav.Link>
      </Nav.Item>
     
    </Nav>
    

     
    </>
  );
};

export default Header;
