import React, { Component } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Slider from 'components/Slider';
import Text from 'components/Text';

import FanIcon from '../assets/fan-icon.jpg';

export class ClimateControlsView extends Component {
    render () {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <Text style={{ margin: '40px 0 0 0' }}>Inside Temperature</Text>
                    <Text style={{ fontSize: '52px', margin: '0 0 0 0' }}>70&deg;F</Text>
                </div>
                <div style={{ width: '400px', margin: '60px auto 0 auto' }}>
                    <Text style={{ display: 'inline-block', fontSize: '24px', margin: '0 0 10px 0' }}>Heat</Text>
                    <Text style={{ display: 'inline-block', float: 'right', fontSize: '24px', margin: '0 0 10px 0' }}>Cool</Text>
                    <Slider style={{ display: 'block', margin: 0, width: '100%' }} />
                </div>

                <div style={{ width: '400px', margin: '100px auto 0 auto', textAlign: 'center' }}>
                    <img src={FanIcon} style={{ marginBottom: '20px' }} />
                    <List style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px' }}>
                        <ListItem style={{ display: 'inline-block' }}>
                            Off
                        </ListItem>
                        <ListItem style={{ display: 'inline-block' }}>
                            1
                        </ListItem>
                        <ListItem style={{ display: 'inline-block' }}>
                            2
                        </ListItem>
                        <ListItem style={{ display: 'inline-block' }}>
                            3
                        </ListItem>
                        <ListItem style={{ display: 'inline-block' }}>
                            4
                        </ListItem>
                        <ListItem style={{ display: 'inline-block' }}>
                            5
                        </ListItem>
                    </List>
                    <Slider style={{ margin: '30px 0 0 0', width: '100%' }} />
                </div>
            </div>
        );
    }
}

export default ClimateControlsView;
