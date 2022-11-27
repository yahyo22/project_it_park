import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { Iinput } from "../../interface/Interface";

export default function Input({ placeholder, type, label }: Iinput) {
  const uuid: string = v4();

  return (
    <StyledInput>
      {label ? <label htmlFor={uuid}>{label}</label> : null}
      <input id={uuid} type={type} placeholder={placeholder} />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #153060;
  }

  input {
    padding: 16px 12px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #9badca;
    background: #fafafa;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #153060;

    &::placeholder {
      color: #153060;
    }

    &:focus {
      outline: 2px solid #9badca;
    }
  }
`;
