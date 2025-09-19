// # React Hooks: `useMemo` vs `useCallback`

// ## Q) Why we need them
// React re-renders components whenever state or props change.  
// This can cause:
// - **Expensive calculations** to run again (even when inputs haven’t changed).
// - **Functions** to get re-created on every render, breaking reference equality (causing child components to re-render unnecessarily).

// `useMemo` and `useCallback` are optimization hooks that help with these cases.



// 1. useCallback

// What it does:
// Returns a memoized function.
// It makes sure the same function reference is reused between renders (unless dependencies change).

// When to use:
// When passing functions as props to child components, to prevent unnecessary re-renders caused by function reference changes.

// Example:
// import React, { useState, useCallback } from "react";

// function Child({ onClick }) {
//   console.log("Child re-rendered!");
//   return <button onClick={onClick}>Click Me</button>;
// }

// export default function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked!");
//   }, []); // ✅ same function across renders

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }




// 2. useMemo

// What it does:
// Returns a memoized value (not a function).
// It caches the result of a computation and re-computes only when dependencies change.

// When to use:
// For expensive calculations or to store derived values.

// Example (wrong way to use it for a function):

// import React, { useState, useMemo } from "react";

// function Child({ onClick }) {
//   console.log("Child re-rendered!");
//   return <button onClick={onClick}>Click Me</button>;
// }

// export default function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useMemo(() => {
//     console.log("Button clicked!");
//   }, []); // ❌ This runs once but returns undefined

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child onClick={handleClick} /> {/* onClick = undefined */}
//     </div>
//   );
// }


// Behavior:

// The console.log("Button clicked!") runs immediately during render.

// No function is returned → Child gets undefined as onClick.

// Clicking "Click Me" does nothing.

// ✅ If you wanted useMemo to return a function, you must explicitly return it:

// const handleClick = useMemo(() => {
//   return () => console.log("Button clicked!");
// }, []);
// But this is just a hacky way — better to use useCallback.

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
// But using useCallback makes it clear your intent is to memoize a function, not a value.





// In short:

// Use useCallback → for functions.

// Use useMemo → for values/results.