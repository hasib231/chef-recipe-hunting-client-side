import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser
  } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(createUser, name, photo);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name, photoURL: photo
    })
      .then(() => {
        console.log(user);
      })
      .catch((error) => {
        setError(error.massage);
      });
  };
  

  return (
    <Container className="w-25 mx-auto p-5 my-section-bg my-5 rounded-5">
      <h3 className="my-color-1 mb-4 text-center">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter a photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Link to="/">
          <Button
            variant="primary"
            disabled={!accepted}
            type="submit"
            className="my-bg-color-2 my-color-2 my-4"
          >
            Register
          </Button>
        </Link>

        <br />
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
        <br></br>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
