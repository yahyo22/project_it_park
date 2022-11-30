import styled from "styled-components";

// Images
import LoginImg from "../../assets/img/Group 1000003350.png";
import LoginImg2 from "../../assets/img/20220408_131702_0001 1.png";

// Components
import Input from "../../Components/input/Input";
import Checkbox from "../../Components/checkbox/Checkbox";
import Button from "../../Components/button/Button";

export default function Login() {
  return (
    <StyleLogin>
      <div className="container">
        <img src={LoginImg} alt="background_image" className="backgroundImg" />
        <section>
          <div className="top">
            <img src={LoginImg2} alt="" />
            <h1>Добро пожаловать</h1>
          </div>
          <form className="form__wrapper">
            <div>
              <Input
                label="Почта"
                placeholder="hannah.green@test.com"
                type="text"
              />
            </div>
            <div>
              <Input
                label="Пароль"
                placeholder="Password123@"
                type="password"
              />
            </div>
            <div>
              <Input
                label="Введите код с картинки"
                placeholder="Enter the shown text"
                type="text"
              />
            </div>
            <div>
              <Checkbox label="Запомнить этот компьютер" />
            </div>
            <div>
              <Button content="Войти" type="button" />
            </div>
            <div className="forgot-password">
              <span>Забыли пароль?</span>
            </div>
          </form>
        </section>
      </div>
    </StyleLogin>
  );
}
const StyleLogin = styled.div`
  padding: 120px 0px;
  width: 100%;
  height: 100%;
  background: #f5f5fb;

  .container {
    display: flex;
    justify-content: flex-end;

    .backgroundImg {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 68%;
      transform: translateY(-50%);
      z-index: 5;
    }

    section {
      padding: 70px 60px;
      width: 657px;
      border-radius: 10px;
      background: #fff;
      z-index: 10;

      .top {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        h1 {
          font-size: 40px;
          font-weight: 400;
          line-height: 52px;
          letter-spacing: 0em;
          color: #153060;
        }

        img {
          height: 78px;
          width: 186px;
        }
      }

      .form__wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .forgot-password {
          margin-top: 8px;
          width: 256px;

          span {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.25px;
            color: #f2451c;
          }
        }
      }
    }
  }
`;
