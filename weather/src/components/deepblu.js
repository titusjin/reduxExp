import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3Chart from './d3Chart';

export default class deepblu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.create(el);
    }

    render(){
        return (
            <div ref="deepblu" className="deepbluComp"></div>
        );
    }
}
