import React, { Component, PropTypes } from 'react';
import classes from './Footer.scss';
import Icon from 'components/Icon';

export class Footer extends Component {
    static propTypes = {
        children: PropTypes.node
    }
    render () {
        const { children } = this.props;
        return (
            <div className={classes.layout}>
                {children}
                <p>Las Vegas: Sunny 85 F</p>
                <Icon
                    style={{ float: 'right', color: 'rgb(155,155,155)' }}
                    name="cog"
                    size="2">
                    Volkswagen Jetta
                </Icon>
            </div>
        );
    }
}

export default Footer;
