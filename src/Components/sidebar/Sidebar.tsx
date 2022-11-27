import { useState } from "react";
import styled from "styled-components";

// logo
import logo from "../../assets/logo/Logo.png";
import logoMobile from "../../assets/logo/logoMobile.svg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSidebar className={(isOpen ? "open " : "") + "sidebar"}>
      <div className="top">
        <div className="img"></div>
      </div>
      <div className="bottom">
        <ul className="lists__wrapper">
          <li className="list active">
            <div className="nav-content">
              <i className="icon icon-home"></i>
              <p>Dashboard</p>
            </div>
          </li>
          <li className="list">
            <div className="nav-content">
              <i className="icon icon-vector"></i>
              <p>Учитиля</p>
            </div>
          </li>
          <li className="list">
            <div className="nav-content">
              <i className="icon icon-users "></i>
              <p>Учитиля</p>
            </div>
          </li>
          <li className="list">
            <div className="nav-content">
              <i className="icon icon-calendar"></i>
              <p>Классы</p>
            </div>
          </li>
          <li className="list">
            <div className="nav-content">
              <i className="icon icon-chat"></i>
              <p>Чат</p>
            </div>
          </li>
          <li className="list">
            <div className="nav-content">
              <i className="icon icon-settings"></i>
              <p>Настройки</p>
            </div>
          </li>
          <li className="list last-list" onClick={() => setIsOpen((p) => !p)}>
            <div className="nav-content">
              <i className="icon icon-arrowOut"></i>
            </div>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding: 50px 0px 50px 62px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 100vh;
  background-color: #fefefe;
  transition: 200ms;

  .top {
    .img {
      width: 186px;
      height: 78px;
      background: url(${logo});
      transition: 200ms;
    }
    margin-bottom: 70px;
  }

  .bottom {
    .lists__wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .list {
        cursor: pointer;
        padding: 10px 0px 10px 8px;
        list-style: none;
        background-color: #fefefe;
        transition: 200ms;

        .nav-content {
          display: flex;
          align-items: center;
          gap: 42px;
          background: transparent;

          p {
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 26px;
            color: #a2a2c2;
          }
        }

        &.active {
          .nav-content {
            border-right: 3px solid #5e81f4;

            .icon {
              background-color: #5e81f4 !important;
            }

            p {
              color: #111026;
            }
          }
        }

        &:not(.last-list):hover {
          background-color: #5e81f4;

          p {
            color: #fff;
          }

          .icon {
            background-color: #fff !important;
          }

          &.active {
            .nav-content {
              .icon {
                background-color: #fff !important;
              }
            }
          }
        }

        &.last-list {
          position: absolute;
          right: 20px;
          bottom: 10px;
        }
      }
    }
  }

  &.open {
    width: 60px;
    overflow: hidden;
    padding: 50px 0px 50px 0px;

    .top {
      padding-left: 6px;

      .img {
        width: 44px;
        height: 45px;
        background: url(${logoMobile});
      }
    }

    .bottom {
      .lists__wrapper {
        .list {
          padding: 10px 0px 10px 15px;

          &.active {
            .nav-content {
              width: 25px !important;
              padding: 0px;
              border: none;
              border-bottom: 3px solid #5e81f4;
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) and (max-width: 100vw) {
    width: 60px;
    overflow: hidden;
    padding: 50px 0px 50px 0px;

    .top {
      padding-left: 6px;

      .img {
        width: 44px;
        height: 45px;
        background: url(${logoMobile});
      }
    }

    .bottom {
      .lists__wrapper {
        .list {
          padding: 10px 0px 10px 15px;

          &.active {
            .nav-content {
              width: 25px !important;
              padding: 0px;
              border: none;
              border-bottom: 3px solid #5e81f4;
            }
          }
        }
      }
    }
  }
`;
