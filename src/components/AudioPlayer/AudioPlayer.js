import React, { Component, PropTypes } from 'react';
import classes from './AudioPlayer.scss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Text from 'components/Text';
import Slider from 'components/Slider';

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
            <div className={classes.layout} style={{ height: '500px' }}>
                <img src={albumCover} />
                <Text style={{ fontWeight: 'bold', margin: '14px 0 0 0' }}>{albumTitle}</Text>
                <Text style={{ margin: '0' }}>{artist}</Text>
                <Text style={{ margin: '0' }}>{song}</Text>
                <audio src={audioFile} ref="song"></audio>
                <Icon name="step-backward" size="3" style={{ position: 'relative', right: '75px' }} />
                <Button onClick={() => onClick(this.refs.song, this)} style={{ marginTop: '20px' }}>
                    <Icon name={`${isPlaying ? 'pause' : 'play'}`} size="3" />
                </Button>
                <Icon name="step-forward" size="3" style={{ position: 'relative', left: '75px' }} />
                <br />
                <Slider
                    min="0"
                    max="100"
                    step="1"
                    style={{ marginTop: '30px' }}/>
            </div>
        );
    }
}

export default AudioPlayer;
