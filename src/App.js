
/*eslint-disable */
import React, { useState, useEffect } from 'react';
import Movies from './Movie/Movies';
import MovieForm from './MovieForm/MovieForm';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, edit] = useState(["CSS,HTML공부", "자바스크립트 문법 공부", "파이썬 공부"]);
  let [like, likeEdit] = useState(true);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function change() {
    const newTitle = [...title];
    newTitle[0] = "Java 문법 공부";
    edit(newTitle);
  };
  const new_Input1 = document.querySelector(".input1");
  const new_Input2 = document.querySelector(".input2");
  const new_button = document.querySelector("form button");
  const new_br = document.querySelector("form .br1");
  const new_br2 = document.querySelector("form .br2");
  const $form = document.querySelector("form");
  function onSubmit1(event) {
    event.preventDefault();
    alert(`${username} 고객님 환영합니다. `);
    $form.removeChild(new_Input1);
    $form.removeChild(new_Input2);
    $form.removeChild(new_br);
    $form.removeChild(new_br2);
    const new_Div = document.createElement("div");
    $form.insertBefore(new_Div, new_button);
    new_Div.innerHTML = `반갑습니다. ${username} 고객님`;
  };

  function changeCondition() {
    likeEdit(!like);
  };
  const toggleCondition = like
    ? "🖤0"
    : "💘1"

  const [movies, setMovies] = useState([]);

  function removeMovie(id) {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movies movie={movie}
        key={movie.id}
        removeMovie={removeMovie}>
      </Movies>
    );
  }) : "추가된 영화가 없습니다."

  function addMovie(movie) {
    setMovies([
      ...movies, movie]);
  };
  return (
    <div className="App">
      <div className="balck-nav">
        <div>Blog 클론 코딩</div>
      </div>
      <form onSubmit={onSubmit1}>
        <input className='input1' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input><br className='br1'></br>
        <input className='input2' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br className='br2'></br>
        <button type='submit'>Login</button>
      </form>
      {/* <button onClick={() => { edit(["안녕하세요", "자바스크립트 문법 공부", "파이썬 공부"]) }}>타이틀 바꾸기</button> */}
      <button onClick={change}>타이틀 바꾸기</button>
      <div className='list'>
        <h3>{title[0]}<span onClick={changeCondition}>{toggleCondition}</span></h3>
        <p>1월 17일 작성</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>1월 19일 작성</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[2]}</h3>
        <p>1월 20일 작성</p>
        <hr />
      </div>
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie}></MovieForm>
      {renderMovies}
      <Modal title="제목:Java" day="2022-01-19"></Modal>
      <Modal title="제목:CSS" day="2022-01-20"></Modal>
      <Modal title="제목:Python" day="2022-01-21"></Modal>
    </div >
  );
}


function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title}</h2>
      <p>{props.day}</p>
      <p>상세내용</p>
    </div>
  )
};

export default App;
