import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import AudioPlayer from 'components/AudioPlayer';
import { sayHi } from 'reducers/audio';

export class AudioControlsBlueToothView extends Component {
    static propTypes = {
        albumCover: PropTypes.string.isRequired,
        albumTitle: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        audioFile: PropTypes.string.isRequired,
        song: PropTypes.string.isRequired
    }

    play (song) {
        const audio = findDOMNode(song);
        audio.play();
    }

    pause (song) {
        const audio = findDOMNode(song);
        audio.pause();
    }

    render () {
        const { albumCover, albumTitle, artist, audioFile, song } = this.props;
        return (
            <div>
                <AudioPlayer />
                <img src={albumCover} />
                <p>{albumTitle}</p>
                <p>{artist}</p>
                <p>{song}</p>
                <audio src={audioFile} ref="song"></audio>
                <button onClick={() => this.play(this.refs.song)}>Play</button>
                <button onClick={() => this.pause(this.refs.song)}>Pause</button>
            </div>
        );
    }
}

const dispatchToProps = dispatch => ({
    sayHi: () => dispatch(sayHi())
});

const stateToProps = state => ({
    albumCover: state.audio.albumCover,
    albumTitle: state.audio.albumTitle,
    artist    : state.audio.artist,
    audioFile : state.audio.audioFile,
    song      : state.audio.song
});

export default connect(stateToProps, dispatchToProps)(AudioControlsBlueToothView);
