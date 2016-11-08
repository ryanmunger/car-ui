import React, { Component } from 'react';
import Text from 'components/Text';

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
    render () {
        const songList = songs.map((song, index) => {
            return (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Text style={{
                        fontSize: '22px',
                        width: '65%',
                        margin: '0 0 15px 0'
                    }}>
                        {song.title}
                    </Text>
                    <Text style={{ width: '35%', margin: '4px auto 0 auto' }}>
                        {song.artist}
                    </Text>
                </div>
            );
        });
        return (
            <div style={{ height: '378px', overflowX: 'hidden', overflowY: 'scroll', margin: '40px auto 0 auto', width: '90%' }}>
                {songList}
            </div>
        );
    }
}

export default AudioControlsLibraryView;
