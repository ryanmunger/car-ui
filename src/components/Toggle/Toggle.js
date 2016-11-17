import React, { Component, PropTypes } from 'react';
import classes from './Toggle.scss';

export class Toggle extends Component {
    static propTypes = {
        onText: PropTypes.string.isRequired,
        offText: PropTypes.string.isRequired
    }

    state = {
        toggleActive: true
    }

    render () {
        const { onText, offText } = this.props;
        const { toggleActive } = this.state;
        return (
            <div style={{ display: 'inline-block' }}>
                <div
                    className={`${classes.layout} ${!toggleActive ? classes.active : null}`}
                    onClick={() => this.setState({ toggleActive: !this.state.toggleActive })}
                >
                    {onText}
                </div>
                <div
                    className={`${classes.layout} ${toggleActive ? classes.active : null}`}
                    onClick={() => this.setState({ toggleActive: !this.state.toggleActive })}
                >
                    {offText}
                </div>
            </div>
        );
    }
}

export default Toggle;
