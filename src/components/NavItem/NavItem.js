import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './NavItem.scss';

export class NavItem extends Component {
    static propTypes = {
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    render () {
        const { link, title } = this.props;
        return (
            <li className={classes.layout}>
                <Link
                    to={link}
                    activeClassName={classes.active}
                    onlyActiveOnIndex={true}>
                    {title}
                </Link>
            </li>
        );
    }
}

export default NavItem;
