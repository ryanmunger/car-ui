
import React, { Component } from 'react';
import Icon from 'components/Icon';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';

const songs = [
    {
        artist: 'Jason Mraz',
        title: 'Life is Beautiful'
    },
    {
        artist: 'Imagine Dragons',
        title: 'Radioactive',
    },
    {
        artist: 'Adelle',
        title: 'Hello'
    },
    {
        artist: 'The Beatles',
        title: 'Hey Jude'
    },
    {
        artist: 'Bruno Mars',
        title: 'Uptown Funk'
    },
    {
        artist: 'Pharrel Williams',
        title: 'Happy'
    },
    {
        artist: 'Steve Aoki',
        title: 'Delirious'
    },
    {
        artist: 'Taylor Swift',
        title: 'Blank Space'
    },
    {
        artist: 'Alan Walker',
        title: 'Faded'
    },
    {
        artist: 'Eminem',
        title: 'Not Afraid'
    },
    {
        artist: 'The Beatles',
        title: 'Hey Jude'
    },
    {
        artist: 'The Beatles',
        title: 'Hey Jude'
    },
    {
        artist: 'The Beatles',
        title: 'Hey Jude'
    }
];

export class AudioControlsLibraryView extends Component {

    handleClick () {
        this.refs.librarySong.play();
    }

    render () {
        const songList = songs.map((song, index) => {
            return (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Text
                        onClick={() => this.handleClick()}
                        style={{
                        fontSize: '22px',
                        width: '65%',
                        margin: '0 0 15px 0'
                    }}>
                        {song.title}
                    </Text>
                    <Text onClick={() => this.handleClick()} style={{ width: '35%', margin: '4px auto 0 auto' }}>
                        {song.artist}
                    </Text>
                </div>
            );
        });
        return (
            <div>
                <audio src="https://dl.dropboxusercontent.com/s/2wdbuc75yha1086/sail.mp3" ref="librarySong"></audio>
                <Wrapper
                    classNames="scroller"
                    style={{
                        height: '460px',
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                        margin: '40px auto 0 auto',
                        width: '90%'
                    }}>
                    {songList}
                </Wrapper>
            </div>
        );
    }
}

export default AudioControlsLibraryView;
