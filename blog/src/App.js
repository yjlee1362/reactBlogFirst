/*eslint-disable*/

import React, { useState } from 'react';
import './App.css';



function App() {
  //스테이트 만들고 변경해보기.
  const 변수명 = "우리집 근처 맛집";
  const today = new Date();
  let [title, 글제목변경] = useState(["국밥 맛집 추천", "수제버거 맛집", "커피맛집"]);
  let [modal, modal변경] = useState(false);
  let [like, lickChange] = useState([0, 0, 0]);
  let [누른제목, 누른제목변경] = useState(0);
  let [value, valueChange] = useState('');
  function 따봉변경(숫자) {
    let nArray = [...like];
    nArray[숫자] = nArray[숫자] + 1;
    lickChange(nArray);
  };

  function 글변경() {
    let newarr = [...title];
    newarr[0] = '김치 맛집 추천';
    글제목변경(newarr);
  };
//ui 열고닫기
  function 열고닫기() {
    if (modal === false) { modal변경(true) }
    else if (modal === true) { modal변경(false) }
  };

  function value값(e) {
    let 쓴값 = e.target.value;
    valueChange(쓴값);
  };

  function 글추가() {
    let newarr = [...title];
    newarr.push(value);
    글제목변경(newarr);
    let newlike = [...like];
    newlike.push(0);
    lickChange(newlike);
  };

  return (
    <div className="App">
      <div className='black-nav'>
        <div>React test</div>
      </div>

      {title.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h3 onClick={() => { 누른제목변경(i) }}>{item} <span style={{ cursor: 'pointer' }} onClick={() => { 따봉변경(i) }}>👍</span>{like[i]}</h3>

            <p>{today.getMonth() + 1}월{today.getDate()}일 작성</p>
            <hr />
          </div>)
      }
      )
      }
      {/* //state의 성질을 이해하는데 꽤나 이해됌 */}
      <div className='publisih'>
        <input type={'text'} onChange={value값} />
        <button onClick={글추가}>저장</button>
      </div>

      <input type={'text'} onChange={(e) => { valueChange(e.target.value) }} />

      {//처음보는 if문
        modal === true ? <Modal title={title} 누른제목={누른제목} value={value} /> : null
      }
      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}
      <button onClick={열고닫기}>모달창여닫기</button>
      <button onClick={글변경}>클릭해보기</button>
    </div>
  );
}
//컴포넌트만들기.
function Modal(props) {
  const today = new Date();
  return (
    <div className='modal'>
      <h2>{props.title[props.누른제목]}</h2>
      <p>{today.getMonth() + 1}월{today.getDate()}일</p>
      <p>{props.value}</p>
    </div>
  )
};

export default App;
