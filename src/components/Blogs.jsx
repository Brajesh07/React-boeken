import React, { Component } from 'react';
import Blog from './Blog';
import BlogMob from './BlogMob';


class Blogs extends Component {
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
                {this.state.matches && (<Blog/>)}
                {!this.state.matches && (<BlogMob />)}
            </div>
        );
    }
}

export default Blogs;