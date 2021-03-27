# React Tic Tac Toe

## using jsx requires changes to webpack.config.js
Webpack doesnt know to resolve .jsx files implicitly. You can include .jsx in the extensions that webpack should resolve without
explicit declaration.

`resolve: {
  extensions: ['.js', '.jsx']
}`

## script commands
npm run build -- hotfix loading
npm start -- will host at localhost:3010

## Lifting State Up
To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component

## Immutability is important
The main benefit of immutability is that it helps you build pure components in React. Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering.

## Function component
In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.



