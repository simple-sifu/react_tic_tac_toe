require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './App.scss';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);