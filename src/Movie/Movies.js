import React, { useState, useEffect } from 'react';

function Movies({ movie, removeMovie }) {

    return (
        <div className='movies'>
            <div className='movie-titles'>
                {movie.title}
                <span className='movie-years'>
                    {movie.year}
                </span>
            </div>
            <div><button onClick={() => { removeMovie(movie.id) }}>삭제</button></div>
        </div>
    )
};

export default Movies;