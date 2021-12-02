import React, { useState } from "react";

// #1 useState("");의 "" value값 대신 object를 보관(store)할 수 있다. - 반복되는 문장 삭제
// #2 value는 fullName.fName으로, useState안에는 fName

function App() {
	const [fullName, setFullName] = useState({
		fName: "",
		lName: "",
	});

	function handleChange(event) {
		
    // #6-1
    // const newValue = event.target.value;
		// const inputName = event.target.name;

    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName"){
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
    // #6-2 6-1에 이어서 테스팅 
		// console.log(newValue);
		// console.log(inputName);
	}

	// #3 onChange에서 handleChange로 올려서 newValue를 각각 state-setFullName을 통해 fName과 lName으로 각각 업데이트가 가능하다.
	// #4 new value 와 inputName이 로그됨 (enent.target.value)가 개별적으로 뿌려진다
	// #5 onChange의 handleChange = controlled component
	return (
		<div className="container">
			<h1>
				Hello, {fullName.fName} {fullName.lName} !
			</h1>
			<form>
				<input
					name="fName"
					onChange={handleChange}
					placeholder="First Name"
					value={fullName.fName}
				/>
				<input
					name="lName"
					onChange={handleChange}
					placeholder="Last Name"
					value={fullName.lName}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
export default App;
