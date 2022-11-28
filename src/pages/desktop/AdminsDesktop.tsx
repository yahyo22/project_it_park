import styled from "styled-components";

// Components
import Sidebar from "../../Components/sidebar/Sidebar";

// Images
import noutPerson from "../../assets/img/noutPerson.png";
import statistics from "../../assets/img/statistics.png";

export default function AdminsDesktop() {
  return (
    <StyledDesktop>
      <Sidebar />
      <main className="content__wrapper">
        <header className="top-header">
          <h5>Welcome back Admin!</h5>
          <img src={noutPerson} alt="noutPerson" />
        </header>
        <div className="statistics__wrapper">
          <div className="left">
            <div className="top">
              <i className="icon icon-cush"></i>
              <p>Зарплата за Месяц</p>
            </div>
            <div className="statistics"></div>
          </div>
          <div className="right">
            <div>
              <i className="icon icon-vector"></i>
              <h3>33</h3>
              <p>Учитиля</p>
            </div>
            <div>
              <i className="icon icon-users"></i>
              <h3>250</h3>
              <p>Ученики</p>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="top">
            <p>Lorem</p>
            <div className="more">
              <p>More</p>
              <i className="icon icon-arrowRight"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="more-about">
              <div className="left">
                <div className="glass"></div>
                <div className="about-text">
                  <span>Lorem</span>
                  <p>Lorem</p>
                </div>
              </div>
              <i className="icon icon-arrowRight"></i>
            </div>
            <div className="more-about">
              <div className="left">
                <div className="glass"></div>
                <div className="about-text">
                  <span>Lorem</span>
                  <p>Lorem</p>
                </div>
              </div>
              <i className="icon icon-arrowRight"></i>
            </div>
            <div className="more-about">
              <div className="left">
                <div className="glass"></div>
                <div className="about-text">
                  <span>Lorem</span>
                  <p>Lorem</p>
                </div>
              </div>
              <i className="icon icon-arrowRight"></i>
            </div>
          </div>
        </div>
      </main>
    </StyledDesktop>
  );
}

const StyledDesktop = styled.div`
  margin-left: 300px;
  padding: 100px 50px 50px;
  height: 100%;
  background: #f5f5fb;

  .content__wrapper {
    .top-header {
      padding: 86px 76px;
      position: relative;
      width: 100%;
      border-radius: 17px;
      background: #f7e5e9;

      h5 {
        font-weight: 700;
        font-size: 25px;
        line-height: 38px;
        color: #ff808b;
      }

      img {
        position: absolute;
        bottom: 5px;
        right: 200px;
      }
    }

    .statistics__wrapper {
      margin: 40px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 23px;

      & > div {
        height: 468px;
        background: #fefefe;
        border-radius: 17px;
      }

      .left {
        padding: 40px 13px 25px;
        width: 640px;

        .top {
          margin: 0px 0px 40px 25px;
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .statistics {
          width: 100%;
          height: 320px;
          background: url(${statistics});
        }
      }

      .right {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 13px;

        & > div {
          padding: 18px 20px;
          width: 270px;
          height: 204px;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          gap: 13px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;

          i.icon {
            min-width: 44px;
            min-height: 44px;
          }

          h3 {
            font-weight: 600;
            font-size: 48px;
            line-height: 72px;
            color: #111026;
            opacity: 0.6;
          }

          p {
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            color: #111026;
            opacity: 0.7;
          }
        }
      }
    }

    .bottom-section {
      .top {
        margin-bottom: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-weight: 500;
          font-size: 17px;
          line-height: 26px;
          color: #111026;
        }

        .more {
          display: flex;
          align-items: center;
          gap: 20px;

          .icon {
            width: 16px;
            height: 16px;
            background-color: #111026 !important;
          }
        }
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;

        .more-about {
          padding: 23px;
          width: 300px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          background: #4d4cac;
          border-radius: 20px;

          .left {
            display: flex;
            align-items: center;
            gap: 17px;

            .glass {
              width: 59px;
              height: 59px;
              background: #fefefe;
              opacity: 0.15;
              border-radius: 12px;
            }

            .about-text {
              display: flex;
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;

              span {
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #fefefe;
                opacity: 0.8;
              }
            }

            p {
              font-weight: 500;
              font-size: 17px;
              line-height: 26px;
              color: #fefefe;
            }
          }

          .icon {
            width: 16px;
            height: 16px;
            background-color: rgba(255, 255, 255, 0.8) !important;
          }

          &:nth-of-type(2) {
            background: #9698d6;
          }

          &:nth-of-type(3) {
            background: #ff808b;
          }
        }
      }
    }
  }
`;
