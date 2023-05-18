import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // need this to change url
  const router = useRouter();

  const submitHandler = async () => {
    
  }
  


  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>

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

      </div>
    </>
  )
}
