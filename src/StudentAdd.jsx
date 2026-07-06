import { useState } from "react";
import { UNSAFE_ErrorResponseImpl } from "react-router";

export default function StudentAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const UserAddition = async (event) => {
    event.preventDefault();
    if (name == "" || age == "" || gender == "") {
      alert("Please fill all fields");
      return;
    } else {
      const URL = "http://localhost:3000/students";

      let Response = await fetch(URL, {
        method: "post",
        body: JSON.stringify({ name, age, gender }),
      });

      Response = await Response.json();
      console.log(Response, "hii");

      if (Response) {
        alert("user has been added");
      }
    }
  };
  return (
    <div>
      <hr />
      <h1>Addiing a user in list</h1>

      <div style={{ textAlign: "center" }}>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          onChange={(event) => setAge(event.target.value)}
          type="text"
          placeholder="enter your age"
        />
        <br /> <br />
        <input
          onChange={(event) => setGender(event.target.value)}
          type="text"
          placeholder="enter your gender"
        />
        <br /> <br />
        <button onClick={UserAddition}>add user</button>
      </div>
    </div>
  );
}
