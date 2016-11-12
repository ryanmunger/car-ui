import React, { Component, PropTypes } from 'react';
import classes from './Text.scss';

export class Text extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func,
        style: PropTypes.object
    }
    render () {
        const { children, onClick, style } = this.props;
        return (
            <p style={style} onClick={onClick}>{children}</p>
        );
    }
}

export default Text;
