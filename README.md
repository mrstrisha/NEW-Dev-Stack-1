# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


Name of my project:NEW-Dev-Stack-1
A little description:This is a project about dev Stack.
Technology that you use:react,tailwind,toaster
3 features about your project:1. Explore Technologies

Discover popular modern technologies with their categories, descriptions, ratings, and difficulty levels.

2. Build Your Stack

Add your favorite technologies to create and manage your own personalized developer stack.

3. Easy Stack Management

Remove individual technologies or clear your entire stack with simple actions.
What is JSX, and why is it used in React? — JSX is a syntax that lets us write HTML-like code inside JavaScript, making React UI easier to create and understand.
What is the difference between props and state? — Props are used to pass data from a parent to a child component, while state stores and manages data that can change inside a component.
What does the useState hook do, and where did you use it in this project? — useState stores changeable data in a component. I used it to manage technologies, the selected stack, and the loading state.
What does the useEffect hook do, and why did you need it to load the JSON data? — useEffect runs side effects after rendering. I used it to fetch technology data from data.json when the app loads.
Why does every item in a .map() list need a unique key prop? — A unique key helps React identify each item and efficiently update the list when it changes.
What is conditional rendering, and where did you use it in this project? — Conditional rendering means showing different UI based on a condition. I used it to show the empty stack message when stack.length === 0.
How do you pass data from a parent component to a child component, and how does a child send something back to the parent? — We pass data through props, and a child can communicate back by calling a function passed from the parent as a prop.
