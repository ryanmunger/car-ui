import AwolNationCover from '../assets/awolnation-cover.jpg';

const songs = [
    {
        albumCover: AwolNationCover,
        albumTitle: 'Megalithic Symphony',
        artist    : 'Awolnation',
        audioFile : 'https://dl.dropboxusercontent.com/s/2wdbuc75yha1086/sail.mp3',
        song      : 'Sail'
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
