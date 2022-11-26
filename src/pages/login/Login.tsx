import { url } from "inspector";
import React from "react";
import styled, { css } from "styled-components";
import LoginImg from "../../assets/img/Group 1000003350.png";
import LoginImg2 from "../../assets/img/20220408_131702_0001 1.png";
import Input from "../../Components/input/Input";
export default function Login() {
  return (
    <StyleLogin>
      <div className="container">
      <img src={LoginImg} alt="" className="backgroundImg" />
      <section>
        <div className="top">
          <img src={LoginImg2} alt="" />
          <h1>Добро пожаловать</h1>
        </div>
        <div className="form">
        <div>
          <label htmlFor="">Почта</label>
          <Input placeholder="hannah.green@test.com" type="text"/>
        </div>
        <div>
          <label htmlFor="">Пароль</label>
          <Input placeholder="Password123@" type="password"/>
        </div>
        <div>
          <div>
            <label htmlFor="">Введите код с картинки</label>
          <Input placeholder="Enter the shown text" type="text"/>
          </div>
        </div>
        </div>
      </section>
      </div>
    </StyleLogin>
  );
}
const StyleLogin = styled.div`
  padding: 138px 0px;
  height: 100vh;
  width: 100%;
  .container{
    display: flex;
    justify-content: flex-end;
  .backgroundImg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 68%;
    transform: translateY(-50%);
    z-index: -10;
  }
  section {
  
background: red;
border-radius: 10px;
padding: 80px 60px;
width: 657px;
height: 726px;
    .top {
      display: flex;
      flex-direction: column;
      gap: 32px;
      h1 {
        font-size: 45px;
        font-weight: 400;
        line-height: 52px;
        letter-spacing: 0em;
        color: #153060;
      }
      img{
        height: 78px;
        width: 186px;

      }
    }
  }
  }
`;
