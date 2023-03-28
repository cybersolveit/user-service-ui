import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CsNav() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>CS-User</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar > <Link to={"/user"} className="custom-nav" >Add User</Link></Navbar>
            <Navbar style={{ marginLeft:"5px"}}> <Link to={"/list"} className="custom-nav">Data</Link></Navbar>
           
           
            
          
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
     
  );
}

export default CsNav;