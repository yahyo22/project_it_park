
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
        <input type={isHide ?type :"text"} placeholder={placeholder} id={uuid} required={true}/>
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
      
    &:focus {
      outline: 2px solid #9badca;
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

// import styled from "styled-components";
// import { v4 } from "uuid";

// // Interface
// import { Iinput } from "../../interface/Interface";

// export default function Input({ placeholder, type, label }: Iinput) {
//   const uuid: string = v4();

//   return (
//     <StyledInput>
//       {label ? <label htmlFor={uuid}>{label}</label> : null}
//       <input id={uuid} type={type} placeholder={placeholder} />
//     </StyledInput>
//   );
// }

// const StyledInput = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 4px;

//   label {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 20px;
//     letter-spacing: 0.25px;
//     color: #153060;
//   }

//   input {
//     padding: 16px 12px;
//     width: 100%;
//     border-radius: 5px;
//     border: 1px solid #9badca;
//     background: #fafafa;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 24px;
//     letter-spacing: 0.15px;
//     color: #153060;

//     &::placeholder {
//       color: #153060;
//     }

//   }
// `;
