import React, { useState } from "react";
import Movies from "../components/Movies";
import MovieForm from "../components/MovieForm";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movies movie={movie}
                key={movie.id}
                removeMovie={removeMovie}>
            </Movies>
        );
    }) : "추가된 영화가 없습니다."


    function removeMovie(id) {
        setMovies(movies.filter(movie => {
            return movie.id !== id;
        }))
    };

    function addMovie(movie) {
        setMovies([
            ...movies, movie]);
    };
    return (
        <>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie}></MovieForm>
            {renderMovies}
        </>
    );
};

export default MovieList;