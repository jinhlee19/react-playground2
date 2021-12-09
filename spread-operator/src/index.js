import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut", ];

console.log(fruits);

const fullName = {
    fName: "James" ,
    lName: "Bond"
}

const user = {
    ...fullName, 
    // fullName으로 그냥 넣으면 object로 묶여서 들어가지만
    // 스프레드 오퍼레이터 '...'사용시 퍼뜨려서 들어가주는 역할
    id: 1,
    username: "jamesbond007"
};

console.log(user);