import Jumbo from '../header/jumbo';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";

const Landing = ()=> {
    return (
       <>
       <Navbar>
 
       <Navbar.Collapse className="justify-content-end">
         <Navbar.Text>
           Developed By: <a href="/">Lauren Northcut</a>
         </Navbar.Text>
       </Navbar.Collapse>
     </Navbar>
               <Jumbo
               JHeader="Reacting To React"
               JContent="Content Here"/>
       </>
  
    )
}

export default Landing;