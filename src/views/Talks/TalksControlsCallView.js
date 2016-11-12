import React, { Component, PropTypes } from 'react';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import Text from 'components/Text';

export class TalksControlsCallView extends Component {
    render () {
        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Avatar imageUrl="http://placehold.it/150x150" />
                <Text style={{ fontSize: '22px', margin: '30px 0 5px 0' }}>Calling&hellip;</Text>
                <Text style={{ fontSize: '32px', margin: '0 0 25px 0' }}>Thomas Muller</Text>
                <Text style={{ margin: 0 }}>00:02</Text>
                <Badge iconName="phone" classNames="endCall"/>
            </div>
        );
    }
}

export default TalksControlsCallView;
