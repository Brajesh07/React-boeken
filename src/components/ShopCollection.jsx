import React, { Component } from "react";
import ComonSlider from './ComonSlider';
import ComonSliderMob from './ComonSliderMob';

class ShopCollectio extends Component {
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
                {this.state.matches && (<FeaturesIcons />)}
                {!this.state.matches && (<ComonSliderMob />)}
            </div>
        );
    }
}

export default ShopCollectio