import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CsNav() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CS-User</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
     
  );
}

export default CsNav;