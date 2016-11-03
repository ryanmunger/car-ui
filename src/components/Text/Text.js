import React, { Component, PropTypes } from 'react';
import classes from './Text.scss';

export class Text extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        style: PropTypes.object
    }
    render () {
        const { children, style } = this.props;
        return (
            <p style={style}>{children}</p>
        );
    }
}

export default Text;
