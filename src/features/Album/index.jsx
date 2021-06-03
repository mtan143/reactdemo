import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id : 1,
            name : 'Beat Music',
            thumbnailUrl : 'https://wallpaperaccess.com/full/327366.jpg'
        },
        {
            id : 2,
            name : 'Finding Neverland',
            thumbnailUrl : 'https://wallpapercave.com/wp/wp3788126.jpg'
        },
        {
            id : 3,
            name : 'Attention Album',
            thumbnailUrl : 'https://wallpapercave.com/wp/wp3788129.jpg'
        }
    ];
    return (
        <div>
            <h1>You can enjoy!</h1>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;