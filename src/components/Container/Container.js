import React, { Component, PropTypes } from 'react';
import classes from './Container.scss';

export class Container extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render () {
        const { children } = this.props;
        return (
            <div className={classes.layout}>
                {children}
            </div>
        );
    }
}

export default Container;
