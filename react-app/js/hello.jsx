'use strict';
import 'babel-polyfill';
import React from 'react';
import {render, Component} from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        color: 'blue',
        text: 'Hello World'
    };

    render() {
        const {color, text} = this.props;
        return (
            <button className={`btn btn-${color}`}>
                {text}
            </button>
        )
    }
}

export default Hello;