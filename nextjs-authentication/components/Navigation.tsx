
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';



export default function Navigation() {

  // creating functions to take user to different pages
  const router = useRouter();

  const { currentUser, logout } = useAuth()

  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Link href="/" style={{ textDecoration: "none", color: 'black'}}>
          <h1
          className='navbar-logo-div'
          >
            NextJS Authentication
          </h1>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ms-auto">

            {
              currentUser
              ?
              (
                <>
                  <Nav.Link as={Link} href="/">Home</Nav.Link>
                  <Nav.Link onClick={async () => {
                    try {
                      // log user out
                      await logout()

                      // if logout function worked successfully, redirect user to home page
                      router.push("/")
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  >Logout</Nav.Link>
                </>
              )
              :
              (
                <>
                  <Nav.Link as={Link} href="/">Home</Nav.Link>
                  <Nav.Link as={Link} href="/login">Login</Nav.Link>
                  <Nav.Link as={Link} href="/register">Register</Nav.Link>
                </>
              )
            }

            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
