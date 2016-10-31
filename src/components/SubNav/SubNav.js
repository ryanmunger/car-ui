import React, { Component, PropTypes } from 'react';
import classes from './SubNav.scss';

export class SubNav extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    render () {
        const { children } = this.props;
        return (
            <ul className={classes.layout}>
                {children}
            </ul>
        );
    }
}

export default SubNav;
