import { useState } from "react";
import styled from "styled-components";

// Images
import userAvatar from "../../assets/img/userAvatar.png";

export default function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledUserMenu className={(isMenuOpen ? "On " : "") + ""}>
      <i
        className={(isMenuOpen ? "On " : "") + "icon icon-arrowOut"}
        onClick={() => setIsMenuOpen((p) => !p)}
      ></i>
      <div className="content__wrapper">
        <nav className="user-nav">
          <ul className="lists__wrapper">
            <li className="list">Выход</li>
          </ul>
        </nav>
        <section className="user-about-section">
          <div className="top">
            <div className="img__wrapper"></div>
            <div className="name__wrapper">
              <h1>Anna Kim</h1>
              <h5>Admin</h5>
            </div>
          </div>
          <div className="languages__wrapper">
            <div className="language-info">
              <div className="left">
                <div className="glass"></div>
                <div className="language">
                  <h3>English</h3>
                  <p>High intermediate</p>
                </div>
              </div>
              <progress
                value="50"
                max="100"
                className="amount-progress"
              ></progress>
            </div>
            <div className="language-info">
              <div className="left">
                <div className="glass"></div>
                <div className="language">
                  <h3>Uzbek</h3>
                  <p>Advanced</p>
                </div>
              </div>
              <progress
                value="45"
                max="100"
                className="amount-progress"
              ></progress>
            </div>
          </div>
          <div className="last-actions">
            <div className="action-top">
              <h1>Недавние изменения</h1>
              <i className="icon icon-bell"></i>
            </div>
            <div className="actions-body">
              <div className="action-info">
                <div className="left">
                  <div className="glass"></div>
                  <div className="action">
                    <h3>Пароль был изменен</h3>
                    <p>24 Sep 2022, Firday</p>
                  </div>
                </div>
              </div>
              <div className="action-info">
                <div className="left">
                  <div className="glass"></div>
                  <div className="action">
                    <h3>Домашнее задание было добавлено</h3>
                    <p>30 Sep 2022, Wednesday</p>
                  </div>
                </div>
              </div>
              <div className="action-info">
                <div className="left">
                  <div className="glass"></div>
                  <div className="action">
                    <h3>Ученик добавил документы</h3>
                    <p>05 oct 2022, Monday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StyledUserMenu>
  );
}

const StyledUserMenu = styled.div`
  padding: 30px 40px;
  position: fixed;
  top: 0px;
  right: -200vw;
  width: 480px;
  max-height: 100vh;
  overflow-y: auto;
  background: #fefefe;
  transition: 200ms ease-in-out;

  &.On {
    top: 0px;
    right: 0px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  & > .icon {
    cursor: pointer;
    position: fixed;
    top: 30px;
    right: 40px;
    /* right: calc(200vw + 40px); */
    background-color: #5e81f4 !important;
    transition: 200ms;

    &.On {
      background-color: #a2a2c2 !important;
    }
  }

  .content__wrapper {
    min-height: 200vh;
    overflow: auto;

    .user-nav {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
          cursor: pointer;
          list-style: none;
          font-weight: 500;
          font-size: 17px;
          line-height: 26px;
          color: #000;

          .icon {
            background-color: #a2a2c2 !important;
          }
        }
      }
    }

    .user-about-section {
      margin-top: 40px;

      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 29px;

        .img__wrapper {
          width: 170px;
          height: 170px;
          border-radius: 100%;
          border: 7px solid #f5f5fb;
          background: url(${userAvatar}) no-repeat center;
          background-size: 110%;
        }

        .name__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;

          h1 {
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            color: #111026;
          }

          h5 {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #a2a2c2;
          }
        }
      }

      .languages__wrapper {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 35px;

        .language-info {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            display: flex;
            align-items: center;
            gap: 25px;

            .glass {
              width: 53px;
              height: 53px;
              background: #f5f5f7;
              border-radius: 12px;
            }

            .language {
              display: flex;
              flex-direction: column;
              gap: 8px;

              h3 {
                font-weight: 500;
                font-size: 17px;
                line-height: 26px;
                color: #111026;
              }

              p {
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #a2a2c2;
              }
            }
          }

          .amount-progress {
            width: 100px;
            height: 6px;
            border-radius: 5px;
            margin-left: -11.5%;
          }
          progress::-webkit-progress-bar {
            background-color: #dcdce5;
            border-radius: 5px;
          }
          progress::-webkit-progress-value {
            background-color: #5e81f4;
            border-radius: 5px;
          }
        }
      }

      .last-actions {
        margin: 0 auto;
        margin-top: 250px;
        width: 340px;

        .action-top {
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          h1 {
            font-weight: 500;
            font-size: 17px;
            line-height: 26px;
            color: #111026;
          }

          .icon {
            width: 21px;
            height: 26px;
          }
        }

        .actions-body {
          display: flex;
          flex-direction: column;
          gap: 33px;

          .action-info {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
              display: flex;
              align-items: center;
              gap: 25px;

              .glass {
                width: 53px;
                height: 53px;
                background: #f5f5f7;
                border-radius: 12px;
              }

              .action {
                display: flex;
                flex-direction: column;
                gap: 8px;

                h3 {
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 24px;
                  color: #131336;
                }

                p {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 21px;
                  color: #a2a2c2;
                }
              }
            }
          }
        }
      }
    }
  }
`;
