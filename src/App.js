
/*eslint-disable */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import MovieList from './pages/MovieList';
import routes from './routes';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
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


  return (
    <Router>
      <div className="App">
        {/* <div className="balck-nav">
        <div>Blog 클론 코딩</div>
      </div> */}
        <Navbar ></Navbar>
        <div className='container'>
          <Switch>
            {routes.map(route => {
              return (
                <Route key={route.path} path={route.path} exact>
                  <route.componenet></route.componenet>
                </Route>
              )
            })}
            <Route path="/" exact>
              <h1>Home</h1>
              <form onSubmit={onSubmit1}>
                <input className='input1' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input><br className='br1'></br>
                <input className='input2' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br className='br2'></br>
                <button type='submit'>Login</button>
              </form>
              <Home change={change} title={title} changeCondition={changeCondition} toggleCondition={toggleCondition}></Home>
            </Route>
          </Switch>
        </div>
      </div >
    </Router>
  );
}

export default App;
