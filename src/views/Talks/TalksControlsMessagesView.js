import React, { Component } from 'react';
import Text from 'components/Text';
import Toggle from 'components/Toggle';
import Wrapper from 'components/Wrapper';

const messages = [
    {
        name: 'Thomas Muller',
        time: '9:03am',
        message: 'Tommy, wanna grab lunch?'
    },
    {
        name: 'Frank Underwood',
        time: '10/26',
        message: 'Coming back to DC on the 28th'
    },
    {
        name: 'Walter White',
        time: '10/19',
        message: 'Yo, i\'m on my way...'
    }
];

export class TalksControlsMessagesView extends Component {
    render () {
        const messagesList = messages.map((message, index) => {
            return (
                <div key={index} style={{
                    alignItems: 'center',
                    borderBottom: '1px solid #fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                }}>
                    <div>
                        <Text
                            style={{
                                fontSize: '22px',
                                width: 'auto',
                                margin: '0 0 10px 0'
                            }}>
                            {message.name}
                        </Text>
                        <Text style={{ marginTop: '0' }}>
                            {message.message}
                        </Text>
                    </div>
                    <Text>
                        {message.time}
                    </Text>
                </div>
            );
        });
        return (
            <div
                style={{
                    position: 'relative'
                }}
                onClickCapture={() => this.setState({ callPrompt: false })}>
                <Text
                    style={{
                        color: 'rgb(0,186,210)',
                        marginBottom: '20px',
                        marginTop: '40px',
                        textAlign: 'center'
                    }}>
                    Messages will disable when car is moving
                </Text>
                <Wrapper
                    classNames="scroller"
                    style={{
                        height: '358px',
                        margin: '40px auto 0 auto',
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                        position: 'relative',
                        width: '90%'
                    }}>
                    {messagesList}
                </Wrapper>
                <Wrapper
                    style={{
                            background: 'rgb(38,38,38)',
                            height: '93px',
                            bottom: '42px',
                            left: '-20px',
                            lineHeight: '93px',
                            padding: '0 35px',
                            position: 'relative',
                            textAlign: 'right',
                            width: '510px'
                    }}>
                    <Text style={{
                        display: 'inline-block',
                        margin: '0 20px 0 0',
                        textTransform: 'uppercase'
                    }}>
                        Do Not Disturb
                    </Text>
                    <Toggle onText="on" offText="off" />
                </Wrapper>
            </div>
        );
    }
}

export default TalksControlsMessagesView;
