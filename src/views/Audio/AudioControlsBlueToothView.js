import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import AudioPlayer from 'components/AudioPlayer';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Text from 'components/Text';
import { sayHi } from 'reducers/audio';

export class AudioControlsBlueToothView extends Component {
    static propTypes = {
        albumCover: PropTypes.string.isRequired,
        albumTitle: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        audioFile: PropTypes.string.isRequired,
        song: PropTypes.string.isRequired
    }

    state = {
        isPlaying: false
    }

    togglePlay (song) {
        const { isPlaying } = this.state;
        const audio = findDOMNode(song);

        this.setState({ isPlaying: audio.paused });
        isPlaying ? audio.pause() : audio.play();
    }

    render () {
        const { albumCover, albumTitle, artist, audioFile, song } = this.props;
        const { isPlaying } = this.state;
        return (
            <div>
                <AudioPlayer />
                <div style={{ textAlign: 'center' }}>
                    <img src={albumCover} />
                    <Text style={{ fontWeight: 'bold', margin: '14px 0 0 0' }}>{albumTitle}</Text>
                    <Text style={{ margin: '0' }}>{artist}</Text>
                    <Text style={{ margin: '0' }}>{song}</Text>
                    <audio src={audioFile} ref="song"></audio>
                    <Button onClick={() => this.togglePlay(this.refs.song)} style={{ marginTop: '20px' }}>
                        <Icon name={`${isPlaying ? 'pause' : 'play'}`} size="3" />
                    </Button>
                </div>
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
