import React, { useState } from 'react';
import InputField from './InputField';

function MovieForm({ addMovie }) {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [titleError, setTitleError] = useState("");
    const [yearError, setYearError] = useState("");
    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    };

    function validateForm() {
        resetMessage();
        let validated = true;
        if (!movieTitle) {
            setTitleError("영화제목을 입력해주세요.");
            validated = false;
        } if (!movieYear) {
            setYearError("개봉년도를 입력해주세요.");
            validated = false;
        }
        return validated;
    };

    function resetMessage() {
        setTitleError("");
        setYearError("");
    };

    function addMovieFirst(event) {
        event.preventDefault();
        if (validateForm()) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: ` ${movieYear}년 개봉`,
            });
            resetMessage();
            resetForm();
        }
    };
    return (
        <form onSubmit={addMovieFirst}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}>
            </InputField>
            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}>
            </InputField>
            <button type='submit'>영화 추가하기</button>
        </form>
    );
}

export default MovieForm;
