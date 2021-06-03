import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Album from '../Album';

 AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <div>
            <ul className="album-list">
                {albumList.map(album => (
                    <li key={album.id} >
                        <Album album = {album} />
                    </li>
                ) )}
            </ul>
        </div>
    );
}

export default AlbumList;