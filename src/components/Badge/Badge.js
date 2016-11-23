import React, { Component, PropTypes } from 'react';
import classes from './Badge.scss';
import Icon from 'components/Icon';

export class Badge extends Component {
    static propTypes = {
        children: PropTypes.node,
        classNames: PropTypes.string,
        containerStyle: PropTypes.object,
        iconName: PropTypes.string,
        onClick: PropTypes.func,
        pulse: PropTypes.bool,
        style: PropTypes.object
    }
    render () {
        const { children, classNames, containerStyle, iconName, onClick, pulse, style } = this.props;
        return (
            <div style={containerStyle} className={classes.container}>
                <div onClick={onClick} style={style} className={`${classes[classNames]} ${classes.layout}`}>
                    {iconName ? <Icon name={iconName}/> : null}
                    {children ? children : null}
                </div>
                {pulse ? <div className={classes.pulse}></div> : null}
            </div>
        );
    }
}

export default Badge;
