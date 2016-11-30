import React, { Component } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Slider from 'components/Slider';
import Text from 'components/Text';

import FanIcon from '../assets/fan-icon.jpg';

export class ClimateControlsView extends Component {
    state = {
        temperature: 70
    }

    handleChange (e) {
        this.setState({ temperature: e.target.valueAsNumber });
    }

    render () {
        const { temperature } = this.state;
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <Text style={{ margin: '40px 0 0 0' }}>Inside Temperature</Text>
                    <Text style={{ fontSize: '52px', margin: '0 0 0 0' }}>{temperature}&deg;F</Text>
                </div>
                <div style={{ width: '400px', margin: '60px auto 0 auto' }}>
                    <Text style={{ display: 'inline-block', fontSize: '24px', margin: '0 0 10px 0' }}>Cool</Text>
                    <Text style={{ display: 'inline-block', float: 'right', fontSize: '24px', margin: '0 0 10px 0' }}>Heat</Text>
                    <Slider classNames="heating" onChange={(e) => this.handleChange(e)} min="60" max="80" step="1" style={{ display: 'block', margin: 0, width: '100%' }} />
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
                    <Slider classNames="fan" min="0" max="5" step="1" style={{ margin: '30px 0 0 0', width: '100%' }} />
                </div>
            </div>
        );
    }
}

export default ClimateControlsView;
