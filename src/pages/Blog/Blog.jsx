import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div className="job-details-banner text-center py-2">
        <h1>Blog</h1>
      </div>
      <div className="container">
        <div className="my-bg p-5 rounded my-5">
          <div className="py-3">
            <h3>1. When should you use context API?</h3>
            <p>
              Context API is a feature of React that allows us to pass data
              through our component trees, giving our components the ability to
              communicate and share data at different levels. You should use
              Context API when you want to avoid prop drilling, which is passing
              data from one component to another through props. However, you
              should also be careful not to use Context API as a global state
              management solution, as it is not designed for that purpose and it
              may cause performance issues1 also suggests using Context API for
              things like: Theme, Language, Authentication, User preferences.
            </p>
          </div>
          <div className="py-3">
            <h3>2. What is a custom hook?</h3>
            <p>
              A custom hook is a way of extracting and reusing some logic that
              involves React hooks. You can create a custom hook by defining a
              function that starts with “use” and calling other hooks inside it.
              You can return any value from your custom hook and use it in your
              components. Custom hooks let you share stateful logic between
              components without repeating code or changing your component
              hierarchy.
            </p>
          </div>
          <div className="py-3">
            <h3>3. What is useRef?</h3>
            <p>
              useRef is a way of creating and accessing a ref object that can
              store a value that persists across renders. You can use useRef to
              store a reference to a DOM element or a variable that you don't
              want to change the rendering of your component. You can assign the
              ref object to an element or a variable and access or update its
              current property. useRef returns the same ref object on every
              render, so you can use it to keep track of values that don't
              depend on the props or state of your component.
            </p>
          </div>
          <div className="py-3">
            <h3>4. What is useMemo?</h3>
            <p>
              useMemo is a way of creating and accessing a value that is the
              result of a function that only runs when one of its dependencies
              changes. You can use useMemo to optimize the performance of your
              component or hook by avoiding unnecessary calculations or
              re-rendering. You can call useMemo with a function and an array of
              dependencies and return the value from useMemo. useMemo returns
              the same value on every render unless the dependencies change, so
              you can use it to keep track of values that depend on the props or
              state of your component or hook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
