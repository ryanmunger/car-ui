import React, { Children, cloneElement, Component, PropTypes } from 'react';
import classes from './Nav.scss';
import NavItem from 'components/NavItem';

export class Nav extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        currentPath: PropTypes.string
    }
    render () {
        const { children } = this.props;
        const childrenWithProps = Children.map(children, child => cloneElement(child, { currentPath: this.props.currentPath }));
        return (
            <ul className={classes.layout}>
                {childrenWithProps}
            </ul>
        );
    }
}

export default Nav;
