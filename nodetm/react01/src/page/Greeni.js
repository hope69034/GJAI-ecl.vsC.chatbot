import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
 
function Greeni(){

  return(
<>
 
      
      <form action="/GreeniRouter" method="get">
      <h1>그리니의 심리 상담소입니다.</h1>
      
   {/*    <form action="http://127.0.01:3000/Greeni" method="get">
      <form action="/Greeni" method="get">
 */}
      <input type="text" name="userInput"></input>
      <input type="submit" value="말하기"></input>
 
 
 

      </form>
      </>
  )
}
    

export default Greeni;
