import React, { Component, PropTypes } from 'react';
import SubNav from 'components/SubNav';
import SubNavItem from 'components/SubNavItem';

export class Audio extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    render () {
        return (
            <div>
                <SubNav>
                    <SubNavItem
                        link="/audio/bluetooth"
                        title="Bluetooth" />
                    <SubNavItem
                        link="/audio/radio"
                        title="Radio" />
                    <SubNavItem
                        link="/audio/library"
                        title="Library" />
                </SubNav>
                {this.props.children}
            </div>
        );
    }
}

export default Audio;
