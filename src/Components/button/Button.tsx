
import styled from "styled-components";

// Interface
import { IButton } from "../../interface/Interface";

export default function Button({ content, onClick, type }: IButton) {
  
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 18px 32px;
  width: 100%;
  background: #7879f1;
  border-radius: 5px;
  border: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: #fff;

  &:hover,
  &:focus {
    outline: 2px solid #9badca;
  }
`;
