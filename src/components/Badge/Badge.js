import React, { Component, PropTypes } from 'react';
import classes from './Badge.scss';
import Icon from 'components/Icon';

export class Badge extends Component {
    static propTypes = {
        children: PropTypes.node,
        classNames: PropTypes.string,
        iconName: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.object
    }
    render () {
        const { children, classNames, iconName, onClick, style } = this.props;
        return (
            <div onClick={onClick} style={style} className={`${classes[classNames]} ${classes.layout}`}>
                {iconName ? <Icon name={iconName}/> : null}
                {children ? children : null}
            </div>
        );
    }
}

export default Badge;
