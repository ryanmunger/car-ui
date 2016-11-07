import React, { Component } from 'react';
import Carousel from 'components/Carousel';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Text from 'components/Text';
import Slider from 'components/Slider';

const channels = ['88.2', '90.3', '93.3', '94.1', '103.7'];

export class AudioControlsRadioView extends Component {
    render () {
        return (
            <div style={{ textAlign: 'center' }}>
                <Carousel />
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: '#fff',
                        fontWeight: 'bold',
                        marginTop: '90px'
                    }}>
                    Favorite Channels
                </Text>
                <List classNames="channel-list">
                    {channels.map((channel, key) => (
                        <ListItem
                            classNames="channel-list-item"
                            key={key}
                            style={{

                            }}>
                            {channel}
                        </ListItem>
                    ))}
                </List>
                <Slider
                    min="0"
                    max="100"
                    step="1"/>
            </div>
        );
    }
}

export default AudioControlsRadioView;
