import React, { Component, PropTypes } from 'react';
import classes from './ListItem.scss';

export class ListItem extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        classNames: PropTypes.string,
        style: PropTypes.object
    }
    render () {
        const { children, classNames, style } = this.props;
        return (
            <li style={style} className={`${classes[classNames]}`}>
                {children}
            </li>
        );
    }
}

export default ListItem;
