import { NavLink, Route, Routes } from "react-router";
import StudentAdd from "./StudentAdd";
import StudentList from "./StudentList";

function App() {
  return (
    <div>

      <ul style={{display:"flex" , justifyContent:"space-around"}}>
        <li>
          <NavLink to="/">listing</NavLink>
        </li>
        <li>   
          <NavLink to="/student">addUser</NavLink>
        </li>
      </ul>
      <Routes>
      <Route  path="/"  element={<StudentList></StudentList>}/>
      <Route path="/student"  element={<StudentAdd></StudentAdd>} />
      </Routes>
    </div>
  );
}
export default App;