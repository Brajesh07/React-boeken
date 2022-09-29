import React, { Component } from 'react';
import Gram from './Gram';
import GramMob from './GramMob';


class FromsGram extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }
    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }
    render() {
        return (
            <div >
                {this.state.matches && (<Gram/>)}
                {!this.state.matches && (<GramMob />)}
            </div>
        );
    }
}

export default FromsGram;