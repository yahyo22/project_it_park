import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { ICheckbox } from "../../interface/Interface";

export default function Checkbox({ label }: ICheckbox) {
  const uuid: string = v4();

  return (
    <StyledCheckbox>
      <input type="checkbox" id={uuid} className="checkbox-input" />
      {label ? <label htmlFor={uuid}>{label}</label> : null}
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .checkbox-input {
    cursor: pointer;
    width: 24px;
    height: 24px;

    &:checked {
      background-color: #7879f1;
      border-radius: 5px;
    }

    &:focus {
      outline: 2px solid #9badca;
      -moz-outline-radius: 5px;
    }
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #153060;
  }
`;
