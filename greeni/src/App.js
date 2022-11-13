// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import compo
import Header from "./component/00.Header.js";
import Greeni from "./component/01.Greeni";
import Greenitest from "./component/02.Greenitest";
import Test01 from "./component/03.Test01.js";

function App() {
  return (
    <>

 
      <Header></Header>

      <Routes>
        <Route path="/" element={<Greeni></Greeni>}></Route>
        <Route path="/test" element={<Greenitest></Greenitest>}></Route>
        <Route path="/test01" element={<Test01></Test01>}></Route>
      </Routes>
    </>
  );
}

export default App;
