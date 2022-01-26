import React from "react";

function Home({ change, title, changeCondition, toggleCondition }) {
    return (
        <>
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
        </>
    );
};

export default Home;