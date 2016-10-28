import React, { Component, PropTypes } from 'react';
import classes from './Badge.scss';
import Icon from 'components/Icon';

export class Badge extends Component {
    static propTypes = {
        iconName: PropTypes.string
    }
    render () {
        const { iconName } = this.props;
        return (
            <div className={classes.layout}>
                {iconName ? <Icon name={iconName}/> : null}
            </div>
        );
    }
}

export default Badge;
