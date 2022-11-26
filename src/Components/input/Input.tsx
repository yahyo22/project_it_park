import React from "react";
import styled from "styled-components";
import { Iinput } from "../../interface/Interface";
import {v4} from "uuid";
export default function Input({ placeholder, type,label }: Iinput) {
  return (
    <StyledInput>
      <div className="div">
        {label ? <label htmlFor={v4()}>{label}</label>:null}
        <input type={type} placeholder={placeholder} />
      </div>
    </StyledInput>
  );
}
const StyledInput = styled.div`
  div {
    width: 100%;
    input {
    width: 100%;
      border: 1px solid #9badca;
      border-radius: 5px;
      padding: 16px 12px;
    }
  }
`;
