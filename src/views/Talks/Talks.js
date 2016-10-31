import React, { Component, PropTypes } from 'react';
import SubNav from 'components/SubNav';
import SubNavItem from 'components/SubNavItem';

export class Talks extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    render () {
        return (
            <div>
                <SubNav>
                    <SubNavItem
                        link="/talks/contacts"
                        title="Contacts" />
                    <SubNavItem
                        link="/talks/messages"
                        title="Messages" />
                </SubNav>
                {this.props.children}
            </div>
        );
    }
}

export default Talks;
