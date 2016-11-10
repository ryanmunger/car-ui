import React, { Component, PropTypes } from 'react';
import classes from './Wrapper';

export class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        style: PropTypes.object
    };

    render () {
        const { children, style } = this.props;
        return (
            <div
                className={classes.layout}
                style={style}>
                {children}
            </div>
        );
    }
}

export default Wrapper;
