import React, { useState } from "react";

function App() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setContact((prevValue) => {
			if (name === "fName") {
				return {
					fName: value,
					lName: prevValue.lName,
					email: prevValue.email,
				};
			} else if (name === "lName") {
				return {
					fName: prevValue.fName,
					lName: value,
					email: prevValue.lName,
				};
			} else if (name === "email") {
				return {
					fName: prevValue.fName,
					lName: prevValue.lName,
					email: value,
				};
			}
		});
	}
	// setContact의 prevValue로 name === 달라진 name of input이 handleChange를 트리거한다.
	// 그리고 새로운 value로 연결된 알맞는 필드(바뀌어진 값에 따른 필드)에 배치시킨다.
	return (
		<div className="container">
			<h1>
				Hello {contact.fName} {contact.lName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input
					onChange={handleChange}
					value={contact.fName}
					name="fName"
					placeholder="First Name"
				/>
				<input
					onChange={handleChange}
					value={contact.lName}
					name="lName"
					placeholder="Last Name"
				/>
				<input
					onChange={handleChange}
					value={contact.email}
					name="email"
					placeholder="Email"
				/>

				<button>Submit</button>
			</form>
		</div>
	);
}

// form > input > name은 값을 일치 시켜주고 value값을 각 input에 value="" keep them tied to the state.

export default App;
