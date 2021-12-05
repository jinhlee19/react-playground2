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