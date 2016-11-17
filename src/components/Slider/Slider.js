import React, { Component, PropTypes } from 'react';
import classes from './Slider.scss';

export class Slider extends Component {
    static propTypes = {
        min: PropTypes.string.isRequired,
        max: PropTypes.string.isRequired,
        step: PropTypes.string.isRequired,
        style: PropTypes.object
    }

    render () {
        const { min, max, step, style } = this.props;
        return (
            <input
                className={classes.layout}
                type="range"
                min={min}
                max={max}
                step={step}
                style={style}/>
        );
    }
}

export default Slider;
