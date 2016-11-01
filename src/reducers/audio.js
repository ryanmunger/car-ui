import AugustanaCover from '../assets/augustana-cover.jpg';

const songs = [
    {
        albumCover: AugustanaCover,
        albumTitle: 'All the Stars and Boulevards',
        artist    : 'Augustana',
        audioFile : 'https://dl.dropboxusercontent.com/s/xjj7icik0buaero/boston.mp3',
        song      : 'Boston'
    }
];

const initialState = {
    albumCover: songs[0].albumCover,
    albumTitle: songs[0].albumTitle,
    artist    : songs[0].artist,
    audioFile : songs[0].audioFile,
    song      : songs[0].song
};

const ACTION_HANDLERS = {

};

export default function reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
