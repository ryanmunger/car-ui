import React, { Component, PropTypes } from 'react';
import classes from './List.scss';

export class List extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        classNames: PropTypes.string,
        style: PropTypes.object
    }
    render () {
        const { children, classNames, style } = this.props;
        return (
            <ul style={style} className={`${classes[classNames]} ${classes.layout}`}>
                {children}
            </ul>
        );
    }
}

export default List;
