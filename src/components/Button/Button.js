import React, { Component, PropTypes } from 'react';
import classes from './Button.scss';

export class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired,
        style: PropTypes.object
    }
    render () {
        const { children, onClick, style } = this.props;
        return (
            <button
                className={classes.layout}
                onClick={onClick}
                style={style}>
                {children}
            </button>
        );
    }
}

export default Button;
