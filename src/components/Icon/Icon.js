import React, { Component, PropTypes } from 'react';
import classes from './Icon.scss';

export class Icon extends Component {
    static propTypes = {
        children: PropTypes.node,
        name    : PropTypes.string.isRequired,
        size    : PropTypes.string,
        style   : PropTypes.object
    }

    render () {
        const { children, name, size, style } = this.props;
        return (
            <span className={classes.layout} style={style}>
                {children ? children : null}
                <i className={`fa fa-${name} ${classes[`fa-${size}`]}`}></i>
            </span>
        );
    }
}

export default Icon;
