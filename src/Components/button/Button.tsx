import React from 'react'
import styled from 'styled-components'
export default function Button({children}:any) {
  return (
    <StyledButton type='button'>{children}</StyledButton>
  )
}
const StyledButton = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 32px;
gap: 10px;
width: 537px;
height: 60px;
background: #7879F1;
border-radius: 5px;
flex: none;
order: 3;
flex-grow: 0;
border: none;
color: #FFFFFF;
font-size: 16px;
`