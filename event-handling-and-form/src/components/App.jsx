import React, { useState } from "react";

function App() {
	const [isMousedOver, setMouseOver] = useState(false);
	// Event #
	// function handleClick() {
	// 	setHeadingText("Submitted");
	// }

	function handleMouseOver() {
		setMouseOver(true);
	}
	function handleMouseOut() {
		setMouseOver(false);
	}
	// Form # 2
	const [name, setName] = useState("");
	const [headingText, setHeading] = useState("");

	function handleChange(event) {
		console.log(event.target.value);
		setName(event.target.value);
	}

	function handleClick(event) {
		setHeading(name);
		console.log(event);
		// setHeadingText("Submitted");
		event.preventDefault();
	}

	return (
		<div className="container">
			<form onSubmit={handleClick}>
				<h1>Hi, Hello! {headingText}</h1>
				<input
					onChange={handleChange} //form #1
					type="text"
					placeholder="What's your name?"
					value={name} //form #3
				/>
				<button
					style={{ backgroundColor: isMousedOver ? "black" : "white" }}
					
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
