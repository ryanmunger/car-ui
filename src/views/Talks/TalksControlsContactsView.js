import React, { Component } from 'react';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import Icon from 'components/Icon';
import Text from 'components/Text';
import Timer from 'components/Timer';
import Toggle from 'components/Toggle';
import Wrapper from 'components/Wrapper';

const contacts = [
    {
        name: 'Anne Johnson'
    },
    {
        name: 'Bob'
    },
    {
        name: 'Christiana'
    },
    {
        name: 'Dylan'
    },
    {
        name: 'Edgar Davis'
    },
    {
        name: 'Frank Lampard'
    },
    {
        name: 'Hieu Quach'
    },
    {
        name: 'Luiz Ramos'
    },
    {
        name: 'Thomas Muller'
    },
    {
        name: 'Yi Wang'
    },
    {
        name: 'Yi Wang'
    },
    {
        name: 'Yi Wang'
    },
    {
        name: 'Yi Wang'
    },
];


export class TalksControlsContactsView extends Component {

    state = {
        callPrompt: false,
        calling: false,
        secondsElapsed: 0
    }

    tick () {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    render () {
        const { callPrompt, calling, secondsElapsed } = this.state;
        // if (calling) {
        //     console.log('hello');
        //     this.interval = setInterval(() => this.tick(), 1000);
        // } else {
        //     clearInterval(this.interval);
        // }
        const contactsList = contacts.map((contact, index) => {
            return (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Text
                        style={{
                            fontSize: '22px',
                            width: 'auto',
                            margin: '0 0 15px 0'
                        }}
                        onClick={() => this.setState({ callPrompt: true })}>
                        {contact.name}
                    </Text>
                </div>
            );
        });
        return (
            <div style={{ position: 'relative' }} onClickCapture={() => this.setState({ callPrompt: false })}>
                {
                    callPrompt && !calling ?
                    <Wrapper style={{
                        textAlign: 'center',
                        position: 'absolute',
                        top: '100px',
                        left: 0,
                        width: '100%',
                        zIndex: '100'
                    }}>
                        <Badge
                            classNames="talk"
                            iconName="phone"
                            onClick={() => this.setState({ calling: true })}>
                            Call
                        </Badge>
                        <Badge
                            classNames="talk"
                            iconName="comment">
                            Text
                        </Badge>
                    </Wrapper>
                    : null
                }
                <Wrapper
                    classNames="scroller"
                    style={{
                        height: !calling ? '358px' : 'auto',
                        margin: '40px auto 0 auto',
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                        position: 'relative',
                        width: '90%'
                    }}>
                    {
                        calling
                        ?
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Avatar imageUrl="http://placehold.it/150x150" />
                                <Text style={{ fontSize: '22px', margin: '30px 0 5px 0' }}>Calling&hellip;</Text>
                                <Text style={{ fontSize: '32px', margin: '0 0 25px 0' }}>Thomas Muller</Text>
                                <Text style={{ margin: 0 }}>00:<Timer /></Text>
                                <Badge iconName="phone" classNames="endCall" onClick={() => this.setState({ calling: false })}/>
                            </div>
                        :
                            contactsList
                    }
                </Wrapper>
                {   !calling
                    ?
                        <Wrapper
                            style={{
                                    background: 'rgb(38,38,38)',
                                    height: '93px',
                                    bottom: '-20px',
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
                    :
                        null
                }
            </div>
        );
    }
}

export default TalksControlsContactsView;
