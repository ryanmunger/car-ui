import React, { Component, PropTypes } from 'react';
import classes from './AudioPlayer.scss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Text from 'components/Text';

export class AudioPlayer extends Component {
    static propTypes = {
        albumCover: PropTypes.string.isRequired,
        albumTitle: PropTypes.string.isRequired,
        audioFile: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        song: PropTypes.string.isRequired,
    }

    state = {
        isPlaying: false
    }

    render () {
        const { albumCover, albumTitle, artist, audioFile, onClick, song } = this.props;
        const { isPlaying } = this.state;
        return (
            <div className={classes.layout}>
                <img src={albumCover} />
                <Text style={{ fontWeight: 'bold', margin: '14px 0 0 0' }}>{albumTitle}</Text>
                <Text style={{ margin: '0' }}>{artist}</Text>
                <Text style={{ margin: '0' }}>{song}</Text>
                <audio src={audioFile} ref="song"></audio>
                <Button onClick={() => onClick(this.refs.song, this)} style={{ marginTop: '20px' }}>
                    <Icon name={`${isPlaying ? 'pause' : 'play'}`} size="3" />
                </Button>
            </div>
        );
    }
}

export default AudioPlayer;
