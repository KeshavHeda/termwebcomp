import React from 'react';
import ReactDOM from 'react-dom';
import BananaComp from './banana-react-cmp.js';
import AppleComp from './apple-react-cmp.js';
import TCHeader from './cmpHeader/TCHeader.js';

ReactDOM.render(
    <div>
        <TCHeader></TCHeader>
        <h1>Hello World from Terminology</h1>
        <AppleComp></AppleComp>
        <BananaComp></BananaComp>
    </div>
    ,
    document.getElementById('root')
);