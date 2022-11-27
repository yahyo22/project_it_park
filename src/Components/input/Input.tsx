import React, { useState } from "react";
import styled from "styled-components";
import { Iinput } from "../../interface/Interface";
import { v4 } from "uuid";
export default function Input({ placeholder, type, label }: Iinput) {
  let uuid = v4()
  const [isHide, setisHide] = useState(true)
  function f(){
    setisHide((p)=>!p)
  }
  return (
    <StyledInput> 
      <div className="div">
        {label ? <label htmlFor={uuid}>{label}</label> : null}
        <input type={isHide ?type :"text"} placeholder={placeholder} id={uuid}/>
        {type === "password" ? 
        <i className={isHide === true ?" icon icon-eyeclosed":"icon icon-eye"} onClick={f}></i>
        :null}
      </div>
    </StyledInput>
  );
}
const StyledInput = styled.div`
  div {
    
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    input {
      width: 100%;
      border: 1px solid #9badca;
      border-radius: 5px;
      padding: 16px 12px;
      border: 1px solid #9BADCA;
border-radius: 5px;
      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.15px;
        color: #153060;
        
      }
      
      outline: none;
    }
    label{
      font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.25px;
font-size: 15px;
color: #153060;
    }
      i{
    position: absolute;
    top: 65%;
    right: 17px;
    transform:translateY(-50%);
  }
  }
`;
