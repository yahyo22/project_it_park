import { url } from "inspector";
import React from "react";
import styled, { css } from "styled-components";
import LoginImg from "../../assets/img/Group 1000003350.png";
import LoginImg2 from "../../assets/img/20220408_131702_0001 1.png";
import Input from "../../Components/input/Input";
import Button from "../../Components/button/Button";
import Checkbox from "../../Components/input/Checkbox";
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
        <form className="form">
        <div>
          <Input placeholder="hannah.green@test.com" type="email"label={"Почта"}/>
        </div>
        <div>
          <Input placeholder="Password123@" type="password"label="Пароль"/>
        </div>
        <div>
          <div>
          <Input placeholder="Enter the shown text" type="text" label="Введите код с картинки"/>
          </div>
        </div>
        <div className="radio">
         <Checkbox/>
          <p>Запомнить этот компьютер</p>
        </div>
        <div className="button">
          <Button>
          Войти
          </Button>
          <p>Забыли пароль?</p>
        </div>
        </form>
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
background: #FFFFFF;
border-radius: 10px;
padding: 80px 60px;
width: 657px;
min-height: 726px;
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
        margin-bottom: 32px;
      }
      img{
        height: 78px;
        width: 186px;

      }
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 24px;
      .radio{
        display: flex;
        align-items: center;
        gap: 10px;
        p{
          margin: 0;
          padding: 0;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.25px;
text-align: left;
color: #153060;
        }
      }
      .button{
        p{
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.25px;
text-align: center;
color: #F2451C;
margin-top: 32px;
transform: translateX(-160px);
        }
      }
    }
  }
  }
`;
