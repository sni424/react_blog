import React, { useState, useEffect } from 'react';

function MovieForm({ addMovie }) {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("")
    };
    function addMovieFirst(event) {
        event.preventDefault();
        addMovie({
            id: Date.now(),
            title: movieTitle,
            year: ` ${movieYear}년 개봉`,
        });
        resetForm();
    };
    return (
        <form onSubmit={addMovieFirst}>
            <input
                type="text"
                value={movieTitle}
                placeholder='영화제목'
                onChange={e => setMovieTitle(e.target.value)}>
            </input><br></br>
            <input
                type="number"
                value={movieYear}
                placeholder='개봉연도'
                onChange={e => setMovieYear(e.target.value)}>
            </input><br></br>
            <button type='submit'>영화 추가하기</button>
        </form>
    );
}

export default MovieForm;
