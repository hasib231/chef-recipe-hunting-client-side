import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div className="job-details-banner text-center py-2">
        <h1>Blog</h1>
      </div>
      <div className="container">
        <div className="my-section-bg p-5 rounded my-5">
          <div className="py-3">
            <h3>
              1. Differences between uncontrolled and controlled components.
            </h3>
            <p>
              In software engineering, uncontrolled and controlled components
              refer to two different types of software components that behave
              differently in terms of their functionality and management.
              Uncontrolled components, also known as uncontrolled inputs or
              uncontrolled forms, are typically HTML form elements such as input
              fields or checkboxes that do not have their state managed by React
              or other front-end frameworks. This means that the values entered
              by users in these form elements are not automatically synchronized
              with the component's state, and developers must manually retrieve
              their values using other methods such as event handlers or DOM
              manipulation. On the other hand, controlled components, also known
              as controlled inputs or controlled forms, are form elements that
              have their state managed by React or other front-end frameworks.
              This means that their values are automatically synchronized with
              the component's state, and developers can access and modify these
              values through the component's props or state.
            </p>
          </div>
          <div className="py-3">
            <h3>2. How to validate React props using PropTypes?</h3>
            <p>
              React provides a library called PropTypes, which allows developers
              to specify the types and constraints of the props passed to a
              component. Here's an overview of how to validate React props using
              PropTypes: Import the PropTypes library. Define the propTypes
              object for your component, specifying the types and constraints of
              each prop using the PropTypes library. Use the propTypes object to
              validate the props passed to your component. If a prop fails
              validation, a warning message will be displayed in the console.
              PropTypes provide a way to ensure that the expected props are
              being passed to the component and that they have the correct data
              types and formats. This helps to prevent errors and make the code
              more reliable and maintainable.
            </p>
          </div>
          <div className="py-3">
            <h3>3.Difference between nodejs and express js.</h3>
            <p>
              Node.js and Express.js are both popular technologies used for web
              development, but they serve different purposes. Here's an overview
              of the differences between Node.js and Express.js: Node.js:
              Node.js is a JavaScript runtime that allows developers to run
              JavaScript code outside of a web browser. Node.js provides a
              server-side environment that can be used to build web
              applications, APIs, and other network services. Node.js provides a
              built-in module system that allows developers to create reusable
              code modules and packages. Node.js can be used with various web
              frameworks, including Express.js. Express.js: Express.js is a web
              application framework for Node.js that provides a set of features
              and tools for building web applications and APIs. Express.js
              simplifies the process of building web applications by providing a
              set of pre-built middleware functions that can be easily
              integrated into the application. Express.js provides features such
              as routing, middleware, and templating engines that make it easier
              to build web applications. Express.js is lightweight and flexible,
              making it easy to customize and extend.
            </p>
          </div>
          <div className="py-3">
            <h3>
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <p>
              In React, a custom hook is a JavaScript function that allows
              developers to reuse stateful logic across multiple components.
              Custom hooks are a way to extract and reuse stateful logic from
              components, without having to pass that logic through props or use
              higher-order components. Custom hooks are created to encapsulate
              and reuse functionality that is needed in multiple components, and
              to avoid code duplication. For example, a custom hook can be
              created to handle complex state management, API requests, or other
              common tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
