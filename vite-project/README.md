# React Learnings and Topics
## React
1. React projects comes with a build process that transforms JSX code(behing the scene by development server) to code that does work in browsers.
2. In React we write code in decalarative way. You define the target HTML structure & UI - not the steps to get there!

### Decalarative and Imperative:

**Declarative** | You describe **what you want the UI to look like**, and React handles the "how".

**Imperative** | You tell the **DOM step-by-step how to do something** (e.g., manually creating/updating elements).

```
Declarative Way (React style):
const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```
```
Imperative Way:
import { useEffect, useRef } from "react";

const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  const listRef = useRef(null);

  useEffect(() => {
    const ul = listRef.current;
    fruits.forEach((fruit) => {
      const li = document.createElement("li");
      li.textContent = fruit;
      ul.appendChild(li);
    });
  }, []);

  return <ul ref={listRef}></ul>;
}
```

### Build Process
- The build process involves creating an optimized production-ready version of your application. This process transforms your code (written in JSX/JavaScript) into a format that browsers can understand, minimizes it, and optimizes assets like CSS and JavaScript for better performance.
- In a typical React project, Webpack or similar tools are used under the hood for the build process. To trigger the build process in React project : use **npm run build**

**Development server**: Provides a live environment during development (e.g., npm start). This starts the server and opens the app in your browser (usually on http://localhost:3000).
## NPM Init
The npm init command initializes a **new Node.js** project by creating a **package.json** file in the current directory. This file contains metadata about your project, such as its **name, version, description, dependencies and script definitions**.
## Real DOM vs Virtual DOM
The Real DOM is the actual HTML structure of a webpage that the browser directly manages, while the Virtual DOM is a lightweight, in-memory representation of the Real DOM that React uses to optimize UI updates. 
**Virtual DOM:**
**Lightweight Representation**: React creates a Virtual DOM, which is a copy of the Real DOM, in memory. 
**Optimized Updates**:Instead of directly updating the Real DOM for every change, React updates the Virtual DOM, then compares it to the previous version to identify the minimal changes needed. 
**Efficient Updates**:This process, called reconciliation, allows React to apply updates to the Real DOM in a more efficient and optimized manner, minimizing unnecessary DOM manipulations. 
**Abstraction:** The Virtual DOM is an abstraction that React uses internally, not a browser feature. 
## Component Functions or React Components
Component is just a regular javascript function. React to recognize the javascript function as component and used as component, it's a component functions or javascript function must follow two important rules:
1. The function name must start with an uppercase character. Multi-word names should be written in PascalCase(e.g "MyHeader").
2. The function must return a **value** that can be **rendered**(displayed on screen) by React. It has to return "Renderable Content".
    - In most cases: Returns JSX also allwed: string, number, boolean, null, array of allowed values.
### JSX
- JavaScript Syntax eXtension. It is used to describe & Create HTML elements by writing HTML markup code inside of Javascript file in a declarative way.
- Browsers do not support JSX syntax.
### Build-in Components vs Custom Components
1. Build-in Components
   - Name starts with a **lowercase** character
   - only **valid, offically** defined HTML elements are allowed
   - Are **renderes as DOM Nodes** by React
2. Custom Components
   - Name starts with **uppercase character**
   - **Defined by you**, "Wraps" built-in or other custom components.
   - React **"traverses"** the component tree until it has only built-in components left
### Component instances work in isolation
When we reuse component multiple time they work separately or alone without impacting the other instances of same component. All instances uses same logic of component but each instances work in isolation.
### User input and two way binding
Two way binding - listening changes on input field by adding onChange event attribute to element and have to assigne changehandler function to attribute as dynamic value. When user make change in input field, it triggers the function and then we can access the value of input field in event object which we get by default in react when function call is triggered. Then we can bind the updated received value to same input field by changing the state value and calling state changing function.
## Setting Components Types Dynamically
We can set inbuild element type dynamically by passing element name or identifier in props and then we can access dynamic element name in component function as props, we have to set prop name (name starts with capital letter) like a custom component name and then we have to add that destructed prop name as custom element name in jsx code. This way we can change element name dynamically by adding element name in props.
## Multiple JSX slots
We always have to make components reusable and we have to separate component wrapper elements as separate component and then we have to pass each parts of component as separate slots in reusable wrapper element.
## Splitting components by Feature & State
Create component specific jsx file and put all code related to component specific in that file instead of putting component code in app.jsx file. State change in one component will re-render whole app component if we have put all components logic in app.jsx file. if we split components logic separately from app jsx file, if state change happens it re-renders only component which state belongs to.
## Fragment method
By default javascript function and react component function return only one element(value), can not return multiple values. If we add fragment method we can avoid using unwanted div element as wrapper and we can return multiple sibling elements. 
``` Either we can use empty fragment <></> or <fragment></fragment> ```
## State
- State values do cause component function to be re-executed when changed through state updating funciton.
- State should be used when ever you have values that should be directly reflected in the UI and not be used for the values that are used behind the scenes and have no direct UI impact.
### Lifting state up
We can lift state up to the ancestor component(where both child components has access to it) when two or component needs same state value. The ancestor component manages the state and passes the function that updates the state via props to child component. When user interact in child component it triggers the state updating function in parent or ancestor component and updates the state value. We can access the function which updates the state in another component by calling it using the props value.
### Avoid intersecting states
Avoid using more states, if multiple component required same information try to avoid creating more state instead lift state up to ancestor so that all the required component can access the same information in single state. Derive information for both components from one state.
### Deriving stats from pops
We cab derive computed value from the state which managed in ancestor component. Derive and compute as many values as needed from existing state and avoid or reduce state as much as possible.
### Updating object state immutably
State that depends on object and array as values, we have to update these object and array in immutable way to avoid the unwanted issue because it changes the original objects and arrays value immediately  in memery even before scheduled states executed by react. For updating the object and array immutably way we have to simply create copy of array or object and need to update that copied array value instead of updating existing array(original array or object) and then have to return that updated copied array. Immutably always matters otherwise we end up updating the original array or object values directly in memory and bug occurs.
### Updating state based on old state
If new state depends on your previous state value, we should not update the state like this ``` setIsEditing(!isEditing); ``` instead pass a function to your state updating function with previous state value, this function will automatically be called by react and will receive the guaranteed latest state value. ``` setIsEditing(wasEditing => !wasEditing); ``` React schedules the setstate updating function behind the scenes. all sate scheduling happens based on exiting or current state value instead of latest state value. when we update state value based on previous state value by calling function inside setstate updating function, the updated state value will be available to next scheduled state immediately.
## Props
### Props are not automatically forwarded to inner elements 
Props are not automatically forwardable from custom html elementor or custom component to component function jsx element, we need to use props and have to set all props values explicitaly to component element.
### Forwarding props to wrapper elements
We can forward props or proxy prox from custom element (Custom component element) to component function inner element by destructing the props in component function as rest operator object and then spreading the rest object to the inner element or wrapper element.
### Setting Default Prop Values
We can set default value for prop when we destructuring the prop in the component function. Component fucntion uses this default value when prop value is not passed not received from custom element.

## prop-types
PropTypes library help you to define the types and requirements for the props your components expects, which can catch bugs early and improve code readability.
- Install PropTypes: npm install prop-types
- Import PropTypes: import PropTypes from 'prop-types';
- Example: 
```
Accordion.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

```
## useReducer
useReducer is similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.
**useReducer** returns an array with exactly two items:
1. The **current state** of this state variable, initially set to the **initial state** you provided.
2. The **dispatch function** that lets you change it in response to interaction.
To update what’s on the screen, call **dispatch** with an object representing what the user did, called an action:
```
function handleClick() {
  dispatch({ type: 'incremented_age' });
}
```
React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI.
```
import { useReducer } from 'react';
function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```
A reducer function is declared like this:
```
function reducer(state, action) {
  // ...
}
```
Then you need to fill in the code that will calculate and return the next state.
Actions can have any shape. By convention, it’s common to pass objects with a type property identifying the action. It should include the minimal necessary information that the reducer needs to compute the next state. The action type names are local to your component.
## useRef React hook
useRef is an react hook. First we have to assign useRef value to const name(ref object) then we have to add "ref" prop(attribute) in HTML element and have to assign useref const name to this ref prop by doing this now html element is conencted with useRef. Now we can access all properties and methods of HTML elements using ref const name. ref always returns the object which contains always currecnt property which contains all the properties and methods of HTML element using this we can access value of html element.
- When ref values changed, the component re-excution wont happen in refs.
- Can be used to gain direct DOM Element access (Greate for reading values or accessing certain browser APIs)
- DOM Interaction: Primarily used for referencing and manipulating DOM elements directly.
- Mutable Value: useRef creates a mutable object ({ current: initialValue }) where current is the value that can be modified.
- The useRef hook in React allows you to create a mutable value that persists across re-renders without causing a re-render when updated. It's primarily used for referencing DOM elements directly, but it can also store mutable values that don't directly affect the UI.
### using Refs more than DOM Element connections
- We can use useRef also to store values of component instance specific and useRef stores the values of each component instances separately and this value will be available if component re-renders also. We can use refs to manager the values of component instance.
- Ref value wont be reset or cleared when component re-excutes, instead just as how it stores the state value, it also stores the ref values behind the scene, react make sures they dont get lose when component function re executes.
### Forwarding Refs
- React wont accept ref as regular prop(when destrcuting the ref prop in component function) in react 19 below. To **forward ref** as props to the component function in react 19 below, we have to use forwardRef method.
- Forward Ref is deprecated in React 19 and above version, forwardRef is no longer necessary. Pass **ref** as a prop instead.
- In React, forwardRef is a utility function that allows you to pass a ref from a parent component to a child component, especially when working with functional components. It's primarily used to enable direct access to the DOM node of a child component's rendered element from its parent. This is helpful when you need to manipulate the DOM of a child component or interact with its underlying element.

Call **forwardRef()** to let your component receive a ref and forward it to a child component:
```
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

## Context API (createContext and useContext hooks)
- Using Context API, we can able to access values directly in any component without need of passing through props to multiple compponent. We can add state updating function values and other values in context and that we can access in any component by wrapping context element.
- We can consume the context values using useContext or use react hooks(methods) by passing context const inside the useContext as value then we can destruture values from the object returned by useContext. The use() work only react version 19 above and if react version is below 19 we have to use useContext() hook. By default we can not use react hooks inside if block or any other block and have to define hooks at top of inside component fuction but use() hook we can use inside any block(e.g if block). By using useContext, we can connect any component function to context and then we can access values of context in component funciton.
- We can create the context(context object) by using the createContext method(function). Then we can include initial or default value of context inside createContext() method as an object or any value. Then we have to assign this createContext object in new const name(name as to be in uppercase character like component name) then we can use this const name as context component wrapper.
- We have to use provider nested name along with context component name if we use react version 19 below and also have to set value prop along with this wrapper element. In value prop we have to insert default context values again.
- We can also use context consumer component to use the context value in any component by adding consumer wrapper in jsx code.
- React re-executes the component function which uses the context value and if any changes in context value.
## Prop drilling
Prop drilling occurs when you need to pass data (via props) through multiple levels of a component tree to reach a deeply nested child component. Essentially, intermediate components pass props they don't directly need, just to ensure the data reaches the intended child component.
**Why it's problematic:**
- **Increased code complexity**: The code becomes harder to read and understand, especially in large applications with many nested components. 
- **Maintenance challenges**: Changes to the data or the component structure require modifications in multiple places, increasing the risk of errors. 
- **Potential performance issues**: Passing props through many intermediate components can lead to unnecessary re-renders and performance degradation.

**Example**: Imagine an app where a "user object" needs to be shared with a deeply nested component: The **user prop** is drilled through Parent, Child, and GrandChild to reach GrandChild, even though only GrandChild uses it.

```
const App = () => {
  const user = { name: 'Alice', age: 25 };
  return <Parent user={user} />;
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

const GrandChild = ({ user }) => {
  return <div>Hello, {user.name}!</div>;
};
```
**Solution to Avoid Prop Drilling**
- The React **Context API** is an effective solution to eliminate prop drilling. Instead of passing props through intermediate components, you can use Context to share state globally across the component tree.
- **Component Composition**: Instead of drilling props down through multiple levels, try to structure your components in a way that they can access the necessary data directly.
- **State Lifting**: Lift the state to the nearest common ancestor of the components that need it, and then pass the state down as props. 


## useImperativeHandle hook
Using this react hook, we can define properties and methods and that should be accessible on this component and from outside this component. This makes the component more reusable and this hook requires two parameters, 
1. The first parameter is **ref** you received as a prop to the MyInput component
2. The second parameter is the function that returns the object with properties and methods that should be exposed to outside component.
```
import { useRef, useImperativeHandle } from 'react';

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
};

export default MyInput;
```
It’s best to use useImperativeHandle sparingly, only when you need fine-grained control over ref behavior, as it can lead to less predictable code. For most scenarios, directly passing ref to access DOM elements or child components is sufficient.

When Working with forwardRef: Since useImperativeHandle works hand in hand with forwardRef, it’s primarily used in scenarios involving forwarded refs.

Enhancing Performance: Instead of exposing the entire child component or DOM element, you expose only specific methods or properties. This minimizes unintended access to the child’s internal details.

## createPortal feature of ReactDOM
**createPortal** lets you render some children into a different part of the DOM.

Creating a portal in React allows you to render a component's child nodes into a DOM node that exists outside of the parent component's hierarchy. This is especially useful for creating modals, tooltips, or any UI element that needs to be rendered outside of the main DOM tree structure.

The createPortal function takes two arguments and third is optional:
- children: The react components or element you want to render
- DOM node: The DOM element where the children should be rendered.
- key: an optional, A unique string or number to be used as the portal’s key.
```
import { createPortal } from 'react-dom';

function MyComponent() {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}
```
![image](https://github.com/user-attachments/assets/33c0c991-f22c-4b96-ac93-edb886da4f52)
![image](https://github.com/user-attachments/assets/f8542b69-e08d-431c-923a-156e12b60467)

Why Use Portals?
- To bypass parent element's CSS overflow: hidden or z-index issues.
- To separate UI elements like modals or tooltips into their own DOM structure for better control.

## React Error Boundary
In React, an Error Boundary is a special component that catches JavaScript errors in its child components during rendering, lifecycle methods, and constructors. Instead of the entire React application crashing, an error boundary gracefully handles these errors and displays a fallback UI (like an error message or a "Something went wrong" screen).
Error Boundaries, you can still use Error Boundaries with functional components by wrapping your functional components inside a class-based Error Boundary.
```
 import React from 'react';
 import { ErrorBoundary } from "react-error-boundary";

 const App = () => {
 return <ErrorBoundary fallback={<div>Something went wrong</div>}>
 /* rest of your component */
 </ErrorBoundary>
 }
```
## Session 13: A look behind the scenes of React and Optimization Techniques
### 1. React builds the component Tree and how react words behind the scenes
When we load the page on browser, first react builds the component tree starting from the APP component(root component) and then it traverses to the next custom component and forms the complete custom components tree until it reaches the component with only JSX code without any custom component.
### 2. Analyzing the component function executions via React's DevTools Profiler
We can analyze the component function executions, re-rendering and updating via react's devtool profiler recording. We have to click the button start profiling to record which component has been re-rendered on component tree when user interacts with the page and how many milli seconds it took to re-execute components function and reason why component function re-executed again. We have to enable the check box to record the reason for re-execution of component. Also it displays the information of component which is re-rendered and not re-rendered when user interacts on the page.
### 3. Avoiding component function executions with memo() function
example: if we have app component which has input element and adding onChange event handler to this input field and also if app component has more custom components, when ever we make changes to the input field and state updating function re-executes the whole app component including the child custom component. In this case there is no changes in child custom component but react unnessarirly re-excutes the all child custom components of state change in app component, this creates the performance issue. To avoid this performance issue, we can use "memo function"x We have to wrap the custom component function inside memo function, this memo function checks the incoming prop value with previous prop value and if no changes then it stops executing the child component. The memo function check the prop value with previous prop value only when parent component trigger the child component for execution. 
Don't overuse memo():
- Dont wrap all custom components with memo function, it will add lot of unnecessary checks and blocking component execution also block all child component executions.
- Add this memo function only to the component which is high in component tree. 
- Also dont use it on components where prop values will change frequently.
```
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
```
### 4. Avoiding component function executions with clever structuring
We can avoid the unnecessary component re-executions by splitting the code in separate component which avoids unnecessaryly execution of other components no changes.
### 5. Understanding the useCallback() Hook
We can use this hook to avoid the function execution unnecessarily when component fucntion executes. This avoids the prop with function value assigned get changed on when component re-excutes and avoids re-creation of function on re-render.  
### 6. Why key matters when managing the state
Keys are an essential part of managing state in React, especially when dealing with lists or dynamically created components. They play a critical role in how React identifies and updates components efficiently. 
- **Unique Identification**: Keys help React uniquely identify elements in a list. This is crucial when React reconciles (or compares) the virtual DOM with the real DOM. Without keys, React cannot accurately determine which items have been added, removed, or changed, leading to incorrect or inefficient updates.
- **How State Mapping Works**: When you dynamically render components (like through .map()), each component instance may manage its own internal state. React tracks state and re-renders components based on changes. However, if keys are not properly assigned, React can lose track of which state belongs to which component instance.
- **Without Proper Keys**: When you use no keys or unstable keys (like array indexes), React can't distinguish between instances. As a result, state might "move" between components, causing unpredictable behavior or bugs.
- **Preserving State**: When managing stateful components, keys are vital to preserving the local state of each component. If keys are not used (or are incorrectly implemented), React might confuse one component with another, leading to unexpected behavior.
  - **using array index has key also create problem:**
```
import React, { useState } from 'react';

const DynamicComponent = ({ id }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`Component ID: ${id}, Count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const ParentComponent = () => {
  const [components, setComponents] = useState([1, 2, 3]);

  return (
    <div>
      {components.map((id, index) => (
        <DynamicComponent key={index} id={id} /> // Using index as a key
      ))}
    </div>
  );
};
```
using unique id value of eacy array as best always to avoid issues. **Using unique and stable keys (like an ID)** ensures React correctly maps state to each component.

```
{users.map(user => (
  <input
    key={user.id}
    value={user.name}
    onChange={e => updateUserName(user.id, e.target.value)}
  />
))}
```


## memo() function
- **memo** lets you skip re-rendering a component when its props are unchanged. memo is used for component optimization.
- Wrap a component in **memo** to get a memoized version of that component. This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed.
- This memo function we use only with component function to avoid the unnecessary re-render of component.
```
import { memo } from 'react';
const MyComponent = memo(({ data }) => {
  console.log('Rendering...');
  return <div>{data}</div>;
});
```
## useMemo() function
- **useMemo** is a React Hook that lets you cache or memoize the result of computations(calculations) or functions within a component between re-renders. It prevents expensive calculations from being re-executed unless their dependencies change. This is helpful for optimizing performance when dealing with values.
- This function we majorly use with normal function which is inside the component to avoid the unnecessary re-execution of function.
- So, useMemo is all about memoizing values and calculations of normal function.
```
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

## lazy loading
In React, lazy loading is **a technique to improve performance by delaying the loading of components or assets until they are actually needed**. This reduces the initial load time of an application, especially beneficial for larger applications with numerous components or heavy assets. React provides the **lazy** function and **Suspense** component to facilitate this dynamic import of components. 

**Dynamic Imports**:
- React.lazy uses dynamic imports (using the **import()** keyword) to load components only when they're needed.

**Code Splitting**:
  - It allows you to split your application's code into smaller chunks, which are then loaded on demand.

**Suspense:**
  - The React.Suspense component handles the loading state while the lazy-loaded component is being fetched. 

**Benefits**:
- **Reduced Initial Load Time**: Loading only the necessary components upfront significantly reduces the time it takes for the application to become interactive. 
- **Improved User Experience**: Users experience faster load times and a more responsive application. 
- **Smaller Initial Bundle Size**: The initial JavaScript bundle size is smaller because it only contains the code for the initial components. 


```
import React, { lazy, Suspense } from 'react';

// Lazy-loaded component
const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function MyComponent() {
  return (
    <>
      <p>Loading a lazy component...</p>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </>
  );
}
```


## useCallback() hook
useCallback is a React Hook that lets you cache a function definition between re-renders. It's especially useful when passing functions as props to child components, ensuring the function reference remains stable unless its dependencies change. It is used to optimize performance by preventing unnecessary re-renders of child components. 
useCallback takes two arguments:
  - callback: A function definition that you want to cache between re-renders.
  - dependencies: A **list of dependencies** including every value within your component that’s used inside your function.
```
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
```
On the **initial render**, the returned function you’ll get from useCallback will be the function you passed.

On the following renders, React will compare the **dependencies** with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with Object.is), **useCallback** will return the same function as before. Otherwise, useCallback will return the function you passed on this render.

In other words, **useCallback** caches a function between re-renders until its dependencies change.

## React useEffect() hook

```
import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
      console.log('Cleanup on unmount');
    };
  }, []);

  return <div>Timer is running. Check the console for updates.</div>;
};

export default TimerComponent;
```
**Example Scenario:**
**Mount**: You load the page, and the Timer component starts logging "Interval running" every second.
**Unmount**: You click "Hide Timer", and the Timer component unmounts. The cleanup function runs, stopping the interval and logging "Cleanup on unmount".

## AbbortController
```
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController(); // Create an AbortController instance

    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data', { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      }
    }

    fetchData();

    // Cleanup function
    return () => {
      abortController.abort(); // Abort the fetch request when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default DataFetcher;
```
**Explanation:**
- AbortController: This is used to abort the fetch request if the component unmounts before the request completes.
- Cleanup Function: The cleanup function calls abortController.abort(), which cancels the fetch request.
**Benefits:**
  Using AbortController is a more modern and cleaner approach to handle fetch requests in React. It ensures that the fetch request is properly canceled, preventing any state updates on an unmounted component.


## React CSS Approach
We can style React app using following any methods:
1. Styling with **Vanilla CSS**
2. **Scoping** styles with **CSS Modules**
3. **CSS-in-JS** styling with **Styled Components**
4. Styling with **Tailwind CSS**
5. Also we can style React app by writting inline style but this method is not recommended. We have to pass object as an value to style prop inside curly braces not string value.

**Advantages**:
- quick and easy to add to JSX
- Styles only affect to element to which you add them.
```<h1 style={{color: 'red', backgroundColor: 'blue', textAlign: 'left'}}></h1> ```

### Dynamic and Conditional inline styling
We can add property value dynamically using ternary operator.
```<h1 style={{color: 'red', backgroundColor: emailNotValie ? '#ffffff' : '#000000'}}></h1> ```

### Dynamic and conditional styling with CSS classes:
We can use template literal to add dyanmic class and hardcoded class names:
``` <h2 className={`headingstyle ${headingtype}`}></h2> ```

### Styling with **Vanilla CSS**
- Vite and React injects all the css imports of the components as separate style tag on the page. 
**Advantages**:
- CSS code is decoupled from JSX code
- You write CSS code as you know it 
- Also css code can be written by another developer who need only minimal amount of access to your JSX code

**Disadvantages**:
- You need to know CSS
- CSS code is not scoped to components. CSS rules may clash across components. Components specific css styles are accessible global on the page.

### **Scoping** styles with **CSS Modules**
- Vanilla CSS with file-specific scoping. Build tool transforms CSS module css class names with only those which are guaranteed to be unique per file.
- We have to add **module** name in css file name for build tool to understand the css file is css module file.
e.g header.module.css 
- Then we have to import css module file and build tool returns the object when we import css module file and we can name object with any naming. The object contains the transformed unique class names.
``` 
import classes from './header.module.css';
<p className={classes.paragraph}>Heading 1</p>

```
**Advantages**:
- CSS code is decoupled from JSX code
- You write CSS code as you know it 
- Also css code can be written by another developer who need only minimal amount of access to your JSX code
- CSS classes are scoped to the component files which import them, No CSS class name clashes 

## Styled Components
To use styled component, we have to import styled from styled component
```
import {styled} from 'styled-components';
const StyledCounter = styled.div`
  /* ... */
`;
const Paragraph = styled.p`
  /* ... */
`;
const Button = styled.button`
  /* ... */
`;
```
### Dynamic and Conditional styling with styled components
we can pass(add) props(attributes) in styled component element to access that props in styled components template literal string and to generate styling dynamically and conditionally. Styled component passes through any known HTML attribute to the DOM and other attributes as props(only non inbuild attributes accessible as props).
### Pseudoelements, pseudoselectors, and nesting and media queries
```
const StyledDiv = styled.div`
  & p {
        color: blue;
    }

  &:hover {
    color: red; // <Thing> when hovered
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  @media (min-width: 768px) {
    & {
     color: red;
    }
}
`
```



## Important React Inteview Questions:
1. what is Virtual DOM and Real DOM in react and the difference between these two DOM.
2. What is state?
3. What is props?
4. What is props?
5. What is component? the difference between class and function components?
6. What is special children prop?
7. What is fragment?
8. What is Client side rendering(CSR) and Server side rendering(SSR).
9. What is SPA and Non SPA and difference between these two?
10. How to indentify the site is SPA or non SPA site?
11. Build-in Components vs Custom Components?
12. React's Strict Mode component?
13. React Developer Tools and the standalone version of React Developer Tools?
14. what is the purpose of useCallback hook and useMemo hook? and differene between these two hooks?
    - useCallback is specifically used to memoize functions.
    - useMemo is used to memoize any return value, which could be a value, an object, or even the result of a function.
15. what is the purpose of memo and useMemo hook? and differene between these two hooks?
    - useMemo - Memoizes the **result of a computation** to prevent expensive recalculations during renders. This is used **inside functional components**.
    - memo - Memoizes an entire **functional component**. Prevents re-rendering of the component if its props haven't changed.



12. React's Strict Mode component?
    it execute every component function twice instead of once in development. If we prepare our application for production and upload to server, strick mode wont execute every component twice because it will slightly impact performance of your application. It helps to catch the errors when component executed twice.
13. React Developer Tools and the standalone version of React Developer Tools?
    https://reactnative.dev/docs/0.72/react-devtools
    https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1
    https://www.freecodecamp.org/news/how-to-use-react-devtools/
## Important Javascript Interview Questions:
1. Rest and Spread Operator
2. Array and Object destructing
3. Ternary Operator(Experssion) and && double ampersand method?
4. Eclamation mark infront of variable name
5. Multi dimensional array
6. Arguments and Parameter
7. Array map method and all array methods
8. Javascript Template Literals
9. For loop
10. Computed Property Names?
11. parseInt and + Plus symbol to convert string to number?

### Answers:
4. Eclamation mark infront of variable name?
- if we have boolean value and want to get opposite value, we can use exclamation mark to variable name. When we add exclamation mark to variable value it inverts the value e.g !true to false and !false to true.
8. Javascript Template Literals?
- We use backticks to create string in template literals. ${} to add dynamic value or variable value to template literal to create string.
10. Computed Property Names?
- Computed Property Names to dynamically update or add properties to an object. We can dynamically set the property name of an object using using square brackets ([]) around the property name.
- Allow you to use variable name as property name in an object
- Syntax: 
``` 
let obj = {
  [dynamicKey]: dynamicValue
};  (for value and key we also can use variables)
```
- Example: 
```
let user = {
  name: "Alice",
  age: 25
};

let key = "email";
let value = "alice@example.com";
let name = "name"
let namevalue = "NewAlice";

user = { ...user, [key]: value, [name]: namevalue };

console.log(user);
// Output: { name: "NewAlice", age: 25, email: "alice@example.com" } 
```
- Benefits:  You can dynamically add or update properties without hardcoding the property names. It's easier to manage and update objects, especially in complex applications.This approach is particularly useful in scenarios like form handling, where you need to update state dynamically based on user input.
11. parseInt ?
- Using this we can convert string to number. ``` parseInt(ageValue) ```; The second parameter in parseInt is radix parameter that specifies the number system to use ``` 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal ```. If radix is omitted, JavaScript assumes radix 10. If the first character cannot be converted, NaN is returned.
- Also we can use Plus symbol infront of string variable to convert the string to number.
