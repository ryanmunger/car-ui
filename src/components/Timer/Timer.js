import React, { Component } from 'react';

export class Timer extends Component {

    state = { secondsElapsed: 0 };

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.refs.phoneTone.play();
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { secondsElapsed } = this.state;
        return (
            <span>
                <audio src="https://dl.dropboxusercontent.com/s/lhuq4o285gx3e2k/phoneTone.mp3" ref="phoneTone"></audio>
                <span>{ secondsElapsed > 9 ? secondsElapsed : `0${secondsElapsed}` }</span>
            </span>
        );
    }
}

export default Timer;
