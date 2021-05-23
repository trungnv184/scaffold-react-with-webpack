### How to scaffold project with webpack

#### 1.1 Setting webpack configuration

1. install these package via npm or yarn, whichever you prever

```
npm install webpack webpack-cli webpack-dev-server --save-dev
```

To explain a little bit about some detailed packages:

- _webpack_ to allow configurations for the project
- _webpack-cli_ to run the webpack via command line interface
- _webpack-dev-server_ is used to live reload webpack so that we can view our changes without refresh page manually.

2. In the **src** folder we create two files index.html and index.js and will make the basic html page such as below

- The index.html file be described

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <title>React with Webpack and Babel</title>
</head>

<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">
        <!-- This div is where our app will run -->
    </div>
</body>

</html>
```

2. install the packages path and html-webpack-plugin via npm

```
npm install path html-webpack-plugin --save-dev
```

- The _path_ package order to help access path easily with join() or resolve() method
- The _html-webpack-plugin_ simplifies creation of HTML files to serve webpack bundles. This is especially useful for webpack bundles that include a hash in a filename which changes every compilation

3. Install the _dotenv_ package to get all constants was defined in the .env

```
npm install dotenv --save-dev
```

and how to get all defined values inside the .env file we should use like the code below

- in the webpack.config.js

```
const dotenv = require("dotenv").config({
    path: path.resolve(__dirname, ".env")
});
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.[hash].js
    },
    mode: process.env.MODE,
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        port: 4000
    },
    plugins: [
         new htmlWebpackPlugin()
    ]

}

```

- In the .env file

```
MODE = development
```

- Let's go over the various components defined in the above file
  - [x] resolve used to import anything inside the src folder with relative path rather than absolute ones, and same goes for node_modules
  - [x] devServer to watch all changing code base in side the src folder

### 2. Setup ReactJS

1. Install these packages for reactjs

```
npm install react react-dom --save-dev
```

2. Create _component_ folder inside src and make a simple component login.js

```
import react from "react";

const Login = () => {
  return <h1>Here is login page</h1>;
};

export default Login;

```

3. Create a new App.js component and inject the login component inside
4. Import the App.js inside index.js and render the App component inside the root element of index.html page

```
import ReactDom from "react-dom";
import App from "./app";
ReactDom.render(<App />, document.getElementById("root"));

```

5. Run the webpack command again those commands defined in the package.json. ( npm run webpack)

```
"webpack": "webpack",
"start": "webpack serve"
```

6. oh no, the terminal of editor will throw error regarding loader **appropriate loaders for react** and how to resolve this issue
7. Babel will help the above issue and transpile reactJS code to js. Let's add a bunch of Babel packages to our app with devDependencies

```
npm install --save-dev @babel/core @babel/node @babel/present-env @babel/preset-react babel-loader
```

and here some detailed packages

- **@babel/core**: to compile from ES6 to ES5
- **@bael/preset-env**: determines which transformations or plugins to use and polyfills ( ie provide functionality can support on the older browser that do not natively support it)
- **@babel/preset-react**: compiles the react code into ES5 code
- **babel-loader**: a webpack helper that transform your javascript dependencies with Babel

8. Go ahead and add these few packages as **devDependencies**

```
npm install style-loader css-loader sass-loader node-sass image-webpack-loader --save-dev
```

- style-loader: will add styles to the DOM
- css-loader: let us import css file in the our project
- image-webpack-loader: lets us load image in the our project

9. Config Babel by creating a .babelrc in the same level of the project

```
touch .babelrc
```

and then add some lines of code

```
{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}
```

10. After theses steps, incase in the project need to import image or in our codebase using class syntax and work with object oriented that why we should to install plugins are file-loader and plugin-proposal-class-properties

```
npm install file-loader @babel/plugin-proposal-class-properties --save-dev
```

11. Add scripts in package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "serve": "webpack serve",
    "clean": "rm -rf dist",  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "serve": "webpack serve",
    "clean": "rm -rf dist",
    "start": "npm run clean && npm run build && npm run serve"
  },
    "start": "npm run clean && npm run build && npm run serve"
  },
```
