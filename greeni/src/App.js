// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import compo
import Header from "./component/00.Header.js";
import ChatBotd from "./component/01.Greeni";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<ChatBotd></ChatBotd>}></Route>
      </Routes>
    </>
  );
}

export default App;
