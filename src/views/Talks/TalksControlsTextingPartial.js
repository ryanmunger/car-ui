import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import Text from 'components/Text';

export class TalksControlsTextingPartial extends Component {

    componentDidMount () {
        setTimeout(() => {
            hashHistory.push('/talks/messages');
        }, 5000);
    }

    render () {
        return (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Avatar imageUrl="http://placehold.it/125x125" />
                    <Text style={{ fontSize: '22px', margin: '30px 0 5px 0' }}>Voice to text&hellip;</Text>
                    <Text style={{ fontSize: '32px', margin: '0 0 25px 0' }}>Thomas Muller</Text>
                    <Badge
                        containerStyle={{
                            height: '100px',
                            lineHeight: '100px',
                            margin: '0 auto',
                            width: '100px'
                        }}
                        pulse={true}
                        style={{
                        background: '#fff',
                        color: 'rgb(228,88,105)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                        }}>
                        Speak Now
                    </Badge>
                    <Text style={{ marginTop: '25px' }}>
                        Say "SEND" when done
                    </Text>
                </div>
        );
    }
}

export default TalksControlsTextingPartial;
