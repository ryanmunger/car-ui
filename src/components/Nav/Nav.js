import React, { Component } from 'react';
import classes from './Nav.scss';
import NavItem from 'components/NavItem';

export class Nav extends Component {
    render () {
        return (
            <ul className={classes.layout}>
                <NavItem
                    link="/"
                    title="Audio" />
                <NavItem
                    link="/call"
                    title="Call &amp; Text" />
                <NavItem
                    link="/air"
                    title="Air" />
            </ul>
        );
    }
}

export default Nav;
