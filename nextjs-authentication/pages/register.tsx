import { useState, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';



export default function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // need this to change url
  const router = useRouter();

  const { signup, currentUser } = useAuth()

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // client side validation to check if form inputs aren't empty
    if(!email || !password) return
  
    try {
      // register new user, which also signs them in
      await signup(email, password)

      // if register function was successful, redirect user to home page
      router.push("/")
    } catch (error) {
      console.log(error)
    }

  }
  


  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>

        {
          currentUser
          ?
          (
            <div className='flex flex-column m-4 justify-content-center text-center'>
              <h1 className='pt-4'>You are already logged in! Click the button below to go home</h1>

              <Link href="/" className='already-logged-in-link mt-4'>
                Home
              </Link>
            </div>
          )
          :
          (
            <Form
            onSubmit={submitHandler}
            style={{ width: "80%", margin: "2rem auto"}}
            >

              <h1>Register</h1>

              <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="my-4"
              >
                <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="my-4"
              >
                <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                />
              </FloatingLabel>

              <Button
              type="submit"
              variant='primary'
              >
                Register
              </Button>

            </Form>
          )
        }

      </div>
    </>
  )
}
