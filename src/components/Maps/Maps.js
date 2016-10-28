import React, { Component, PropTypes } from 'react';
import classes from './Maps.scss';

export class Maps extends Component {
    static propTypes = {
        location: PropTypes.string.isRequired
    }
    render () {
        const { location } = this.props;
        return (
            <div className={classes.layout}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBXiChQ1fodlQaiVW_GtqIwv2V_hv6KgxI&center=${location}&zoom=12`}
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Maps;
