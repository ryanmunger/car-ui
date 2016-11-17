import React, { Component, PropTypes } from 'react';
import classes from './Wrapper.scss';

export class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        classNames: PropTypes.string,
        style: PropTypes.object
    };

    render () {
        const { children, classNames, style } = this.props;
        return (
            <div
                className={`${classes[classNames]}`}
                style={style}>
                {children}
            </div>
        );
    }
}

export default Wrapper;
