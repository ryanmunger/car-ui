
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
            <div>
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

// <Wrapper style={{
//             background: 'rgb(38,38,38)',
//             height: '93px',
//             left: '-20px',
//             position: 'relative',
//             textAlign: 'center',
//             width: '510px'
// }}>
//     <Icon name="caret-up" style={{ fontSize: '20px' }} />
//     <Text style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>Uptown Funk</Text>
//     <Text style={{ margin: 0 }}>Bruno Mars</Text>
// </Wrapper>
