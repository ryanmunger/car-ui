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

    togglePlay (song, audioPlayer) {
        const { isPlaying } = audioPlayer.state;
        const audio = findDOMNode(song);

        audioPlayer.setState({ isPlaying: audio.paused });
        isPlaying ? audio.pause() : audio.play();
    }

    render () {
        const { albumCover, albumTitle, artist, audioFile, song } = this.props;
        return (
            <AudioPlayer
                albumCover={albumCover}
                albumTitle={albumTitle}
                artist={artist}
                audioFile={audioFile}
                onClick={this.togglePlay}
                song={song} />
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
