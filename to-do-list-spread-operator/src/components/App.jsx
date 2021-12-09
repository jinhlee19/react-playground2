//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
// added to an array.
//3. The <ul> should display all the array items as <li>s

import React, { useState } from "react";

function App() {

	const [inputText, setInputText] = useState([]);
	const [items, setItems] = useState([]);

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}
	function addItem (){
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
		setInputText("");
	}
	
	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input onChange={handleChange} type="text" value={inputText} />
				<button onClick={addItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((todoItem) => (
						<li>{todoItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;

// {items.map(todoItem => {
// 	return <li>{todoItem}</li>;
// 	})}
