# React Learnings and Topics
## Component instances work in isolation
When we reuse component multiple time they work separately or alone without impacting the other instances of same component. All instances uses same logic of component but each instances work in isolation.
## User input and two way binding
Two way binding - listening changes on input field by adding onChange event attribute to element and have to assigne changehandler function to attribute as dynamic value. When user make change in input field, it triggers the function and then we can access the value of input field in event object which we get by default in react when function call is triggered. Then we can bind the updated received value to same input field by changing the state value and calling state changing function.
## updating object state immutably
## Setting Components Types Dynamically
We can set inbuild element type dynamically by passing element name or identifier in props and then we can access dynamic element name in component function as props, we have to set prop name (name starts with capital letter) like a custom component name and then we have to add that destructed prop name as custom element name in jsx code. This way we can change element name dynamically by adding element name in props.
## Multiple JSX slots
We always have to make components reusable and we have to separate component wrapper elements as separate component and then we have to pass each parts of component as separate slots in reusable wrapper element.
## Splitting components by Feature & State
Create component specific jsx file and put all code related to component specific in that file instead of putting component code in app.jsx file. State change in one component will re-render whole app component if we have put all components logic in app.jsx file. if we split components logic separately from app jsx file, if state change happens it re-renders only component which state belongs to.
## Fragment method
By default javascript function and react component function return only one element(value), can not return multiple values. If we add fragment method we can avoid using unwanted div element as wrapper and we can return multiple sibling elements. 
``` Either we can use empty fragment <></> or <fragment></fragment> ```
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



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
