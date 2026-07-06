import { NavLink, Route, Routes } from "react-router";
import StudentAdd from "./StudentAdd";
import StudentList from "./StudentList";
import { lazy, Suspense, useState } from "react";
//mport LazyLoading from "./LazyLoading";
 const LazyLoading = lazy(()=>import('./LazyLoading'))

function App() {
  const [load,setLoad] = useState(false)
  return (

    <div>

     <h1>lazy loading</h1>
     {
      load? <Suspense fallback={<h1> data is loading.....</h1>}> <LazyLoading /></Suspense>: null
     }
    <button onClick={()=> setLoad(true)}>load</button>
    </div>
  );
}
export default App;
