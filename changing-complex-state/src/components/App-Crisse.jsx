import React, {useState} from "react";

function App() {
  const [fullName, setFullname] = useState({
    fName: "",
    lName: ""
  });
 
  function inputOnchange(e) {
    console.log(e.target.name);
    e.target.name === "fName"
      ? setFullname({ fName: e.target.value, lName: fullName.lName })
      : setFullname({ lName: e.target.value, fName: fullName.fName });
  }
 
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={inputOnchange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={inputOnchange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


//1 useState("");의 "" value값 대신 object를 보관(store)할 수 있다. - 반복되는 문장 삭제
//2 value는 fullName.fName으로, useState안에는 fName, 
//3 onChange에서 handleChange로 올려서 newValue를 각각 state-setFullName을 통해 fName과 lName으로 각각 업데이트가 가능하다.
//4 new value 와 inputName이 로그됨 (enent.target.value)가 개별적으로 뿌려진다
//5 onChange의 handleChange = controlled component 