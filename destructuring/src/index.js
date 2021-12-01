import animals, { useAnimals } from "./data";

// console.log(animals);

// #1 - 구조분해할당, 배열 구조분해
const [cat, dog] = animals;
console.log(cat);

// #2 - variable 또는 property에 다른 이름을 할당해주고 싶을 경우 - Public API를 가져와서 데이터를 홀드할 때 유용!
const { name, sound } = cat;
const { name: catName, sound: catSound } = cat;

// #3 - name이 undefined 일때 "value" 를 대신 사용.
const { name = "Fluffy", sound = "Purr" } = cat;

// #4 - 중첩 객체 nested object 에서 foot또는 water를 destructure - extensive destructuring
const { name, sound, feedingRequirements:{food, water} } = cat;
console.log(feedingRequirements.food);
console.log(food);

// #5 - destructuring 으로 useState사용하기
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"

console.log(cars);


// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
