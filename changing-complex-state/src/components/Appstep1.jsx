import React, {useState} from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello, {fName} {lName} !
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// 정리
// 3열의 기본값 fName을 기본상태인 ("")로 보관.
// 25열 onChange가 트리거한 {함수}는 value를 7열 fName으로 객체를 넘김.
// event가 실행된 타겟의 value값(경로.타겟.값)을 받아와서 firstname으로 넘김 
// 9열 넘겨진 값을 setFName으로 다시 넘김 -> 5열에서 다시 setFName으로 업데이트