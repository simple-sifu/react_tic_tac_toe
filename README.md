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

