import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
  const { signIn, googlePopup, setUser, gitHubPopup } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googlePopup()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }

  const handleGithubPopup = () => {
    gitHubPopup()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }

  return (
    <Container className=" w-25 mx-auto p-5 my-section-bg my-5 rounded-5">
      <h3 className="my-color-1 mb-5 text-center">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
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

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="my-bg-color-2 my-color-2 mt-3"
          >
            Login
          </Button>
        </div>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
      <p className="text-center">or</p>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          class="btn btn-outline-success"
        >
          <FaGoogle style={{ fontSize: "1.5rem" }} className="me-2"></FaGoogle>
          Sign in with Google
        </button>
        <button
          onClick={handleGithubPopup}
          type="button"
          class="btn btn-outline-success mt-3"
        >
          <FaGithub style={{ fontSize: "1.5rem" }} className="me-2"></FaGithub>
          Sign in with Github
        </button>
      </div>
    </Container>
  );
};

export default Login;
