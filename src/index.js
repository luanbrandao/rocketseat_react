// yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
// yarn add react react-dom 
// yarn add babel-loader -D
// yarn add webpack-dev-server -D

// css
// yarn add style-loader css-loader 
// img
// yarn add file-loader -D
// ajuda quando queremos usar state em uma class
//yarn add @babel/plugin-proposal-class-properties

// yarn add prop-types 
import React from 'react';
import {render } from 'react-dom'
import App from './App';

render( <App></App> , document.getElementById('app'))