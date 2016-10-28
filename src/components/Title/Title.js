import React, { Component, PropTypes } from 'react';
import classes from './Title.scss';

export class Title extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    render () {
        const { children } = this.props;
        return <h1>{children}</h1>;
    }
}

export default Title;
