import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './NavItem.scss';

export class NavItem extends Component {
    static propTypes = {
        link       : PropTypes.string.isRequired,
        title      : PropTypes.string.isRequired,
        currentPath: PropTypes.string
    }

    render () {
        const { link, title } = this.props;
        const linkRoute = this.props.link.split('/')[1];
        const activeRoute = this.props.currentPath.split('/')[1];

        return (
            <li className={classes.layout}>
                <Link
                    to={link}
                    className={`${activeRoute === linkRoute ? classes.active : null}`}>
                    {title}
                </Link>
            </li>
        );
    }
}

export default NavItem;
