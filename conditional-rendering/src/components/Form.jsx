import React from "react";

function Form(props) {
	return (
		<form className="form">
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			{props.isRegistered === false && (
				<input type="password" placeholder="Confirm Password" />
			)}
			<button type="submit">
				{props.isRegistered ? "Login" : "Register"}
			</button>
		</form>
	);
}

export default Form;

// app.jsx의 userIsRestered를 가져와서 사용함
