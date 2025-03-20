# React Learnings and Topics
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

## Important Javascript Interview Questions:
1. Rest and Spread Operator
2. Array and Object destructing
3. Ternary Operator or Experssion
4. Eclamation mark infront of variable name
5. Multi dimensional array
6. Arguments and Parameter
7. Array map method and all array methods
8. Javascript Template Literals
9. For loop
10. Computed Property Names?
11. parseInt?

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
