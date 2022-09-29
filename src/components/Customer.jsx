import React, { Component } from 'react';
import Review from './Review';
import ReviewMob from './ReviewMob';

class Customer extends Component {
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
                {this.state.matches && (<Review/>)}
                {!this.state.matches && (<ReviewMob />)}
            </div>
        );
    }
}

export default Customer;