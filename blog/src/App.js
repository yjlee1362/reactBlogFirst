/*eslint-disable*/

import React, {useState} from 'react';
import './App.css';



function App() {
  const 변수명 = "우리집 근처 맛집";
  const today = new Date();
  let [title, 글제목변경] = useState({ one :'국밥 맛집 추천', two : '수제버거 맛집' , three : '커피맛집' });
  let [like,lickChange] = useState(0);

  function 글변경(){
    let newObj = {...title};
    newObj.one = '김치 맛집 추천';
    글제목변경(newObj);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
        </div>
        <div className="list">
          <h3>{title.one} <span style = {{cursor:'pointer'}} onClick={()=>{lickChange(like++)} }>👍</span>{like}</h3>
          <p>{today.getMonth()+1}월{today.getDate()}일 작성</p>
          <hr/>
        </div>
        <div className="list">
          <h3>{title.two}</h3>
          <p>{today.getMonth()+1}월{today.getDate()}일 작성</p>
          <hr/>
        </div>
        <div className="list">
          <h3>{title.three}</h3>
          <p>{today.getMonth()+1}월{today.getDate()}일 작성</p>
          <hr/>
        </div>
        <Modal></Modal>
        <button onClick={글변경}></button>
    </div>
  );
}


function Modal(){const today = new Date();
  return(
    <div className='modal'>
          <h2>title</h2>
          <p>{today.getMonth()+1}월{today.getDate()}일</p>
          <p>content</p>
        </div>
  )
};

export default App;
