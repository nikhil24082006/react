import { useEffect, useState } from "react";

import React from "react";

const StudentList = () => {
  const [prod, setProd] = useState([]);
  console.log("hii");
  useEffect(() => {
    GetImg();
  }, []);
  const GetImg = async () => {
    const URL = "http://localhost:3000/students";
    let response = await fetch(URL);
    console.log("hii");
    response = await response.json();
    console.log(response);
    setProd(response);
  }
  const DeleteUser=async(id)=>{
    console.log(id);
    const URL = "http://localhost:3000/students";
    let response = await fetch(URL+"/" + id ,{method:"delete"})
    response = response.json();
    if(response){
      alert("data hhas been deleted")
    } 
    GetImg()

    
  }

  return (
    <div>
      <ul style={{display:"flex" , justifyContent:"space-around"}}>
        <li>name</li>
        <li>age</li>
        <li>gender</li>
        <li>action</li>
      </ul>
      <hr />
      {prod.map((item, index) => (
        <ul
          style={{ display: "flex", justifyContent:"space-around", border: "2px solid black",font:"caption" }}
          key={item.name}
        >
          <li> {item.name}</li>
          <li style={{ listStyle: "none" }}> {item.age}</li>
          <li style={{ listStyle: "none" }}>{item.gender}</li>
          <li style={{listStyle:"none"}}> <button onClick={()=>DeleteUser(item.id)}>Delete</button></li>
        </ul>
      ))}
    </div>
  );
};

export default StudentList;
