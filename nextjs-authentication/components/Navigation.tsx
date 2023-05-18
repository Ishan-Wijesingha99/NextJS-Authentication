
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';



export default function Navigation() {

  // creating functions to take user to different pages
  const router = useRouter();
  const goHome = () => router.push('/');
  const goRegister = () => router.push('/register');
  const goLogin = () => router.push('/login');

  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <h1
        className='navbar-logo-div'
        onClick={goHome}
        >
          NextJS Authentication
        </h1>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/login">Login</Nav.Link>
            <Nav.Link as={Link} href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
