# React Tic Tac Toe

Webpack doesnt know to resolve .jsx files implicitly. You can include .jsx in the extensions that webpack should resolve without
explicit declaration.

`resolve: {
  extensions: ['.js', '.jsx']
}`

# script commands
npm run build
npm start -- will start at 3010