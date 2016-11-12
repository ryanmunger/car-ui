import React, { Component, PropTypes } from 'react';
import classes from './Avatar.scss';

export class Avatar extends Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired
    }
    render () {
        const { imageUrl } = this.props;
        return (
            <img className={classes.layout} src={imageUrl} />
        );
    }
}

export default Avatar;
