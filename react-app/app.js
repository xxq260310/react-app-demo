'use strict';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Hello from "./js/hello";

let main = function () {
    render(
        <Hello/>, document.getElementById('hello'));
};

window.onload = function () {
    main();
};