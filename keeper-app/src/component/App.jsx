import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js"; 
console.log(notes);

// #1 app.jsx의 prop 
// #2-1 prop setting at Note.jsx
// #2-2 notes.js 연결 export-> import 
// #3 app.jsx에 createNote() 추가 및 map function 적용
// #4 arrow function 으로 바꿔주기
// function단어, return은 단수<>이기 때문에 삭제, 
// => ()로 묶어주는건 보기편하라는 convention

function App() {
	return (
		<div>
			<Header />
			{/* {notes.map(createNotes)} */}
			{notes.map( noteItem => (
			<Note
				key={noteItem.key}
				title={noteItem.title}
				content={noteItem.content}
			/>
		))} 
		<Footer />
		</div>
	);
}
export default App;