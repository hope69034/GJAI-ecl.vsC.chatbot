// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import compo
import Header from "./component/00.Header.js";
import Tmodel from "./component/01.Tmodel";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Tmodel></Tmodel>}></Route>
      </Routes>
    </>
  );
}

export default App;
