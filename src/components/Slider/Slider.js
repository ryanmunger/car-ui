import React, { Component, PropTypes } from 'react';
import classes from './Slider.scss';

export class Slider extends Component {
    static propTypes = {
        min: PropTypes.string.isRequired,
        max: PropTypes.string.isRequired,
        step: PropTypes.string.isRequired
    }

    render () {
        const { min, max, step } = this.props;
        return (
            <input
                className={classes.layout}
                type="range"
                min={min}
                max={max}
                step={step} />
        );
    }
}

export default Slider;
