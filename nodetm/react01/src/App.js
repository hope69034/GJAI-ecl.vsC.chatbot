import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//page
import Main from "./page/Main";
import Greeni from "./page/Greeni";
//layout
import Header from "./layout/Header";


function App() {
  console.log("react : app.js");
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Greeni" element={<Greeni />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
