import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Chart } from "chart.js/auto";

// Components
import Sidebar from "../../Components/sidebar/Sidebar";
import UserMenu from "../../Components/userMenu/UserMenu";

// Images
import noutPerson from "../../assets/img/noutPerson.png";
import statistics from "../../assets/img/statistics.png";

export default function AdminsDesktop() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const ref: any = useRef();

  //
  async function getStatistics() {
    // statistikada x y malumotla
    const data = [
      { year: "1/12", count: 5300000 },
      { year: "2/12", count: 4400000 },
      { year: "3/12", count: 4700000 },
      { year: "4/12", count: 6000000 },
      { year: "5/12", count: 5200000 },
      { year: "6/12", count: 6700000 },
      { year: "7/12", count: 6090000 },
      { year: "8/12", count: 5200000 },
      { year: "9/12", count: 5900000 },
      { year: "10/12", count: 4800000 },
      { year: "11/12", count: 5200000 },
      { year: "12/12", count: 3500000 },
    ];

    // Divga ulash joyi
    new Chart(ref.current, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Зарплата за Месяц",
            data: data.map((row) => row.count),
            borderWidth: 0,
            borderRadius: 25,
            borderSkipped: false,
            backgroundColor: "#DAD7FE",
            hoverBackgroundColor: "#4339F2",
            maxBarThickness: 18
          },
        ],
      },
    });
  }

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <StyledDesktop className={(isOpen ? "On " : "") + ""}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
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
            {/* ==Statistika== */}
            <div style={{ width: "100%" }}>
              <canvas ref={ref} id="acquisitions"></canvas>
            </div>
            {/* === */}
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
      <UserMenu />
    </StyledDesktop>
  );
}

const StyledDesktop = styled.div`
  margin: 0px 340px 0px 230px;
  padding: 60px 30px 40px;
  height: 100%;
  background: #f5f5fb;
  transition: 200ms ease-in-out;

  &.On {
    margin-left: 55px;
  }

  .content__wrapper {
    max-width: 1200px;
    margin: 0 auto;

    .top-header {
      max-width: 940px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      width: 100%;
      border-radius: 17px;
      background: #f7e5e9;

      h5 {
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        color: #ff808b;
      }

      img {
        position: absolute;
        width: 140px;
        height: 170px;
        bottom: 5px;
        right: 20%;
      }
    }

    .statistics__wrapper {
      margin: 30px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 17px;

      & > div {
        height: 425px;
        background: #fefefe;
        border-radius: 17px;
      }

      .left {
        padding: 30px 10px 20px;
        width: 590px;

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
        padding: 18px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;

        & > div {
          padding: 16px 18px;
          width: 240px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          gap: 12px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;

          i.icon {
            min-width: 33px;
            min-height: 33px;
          }

          h3 {
            font-weight: 600;
            font-size: 44px;
            line-height: 66px;
            color: #111026;
            opacity: 0.6;
          }

          p {
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
            color: #111026;
            opacity: 0.7;
          }
        }
      }
    }

    .bottom-section {
      max-width: 940px;
      margin: 0 auto;

      .top {
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #111026;
        }

        .more {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;

          .icon {
            min-width: 18px;
            min-height: 18px;
            background-color: #111026 !important;
          }
        }
      }

      & > .bottom {
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 18px;

        .more-about {
          cursor: pointer;
          padding: 15px;
          width: 290px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          background: #4d4cac;
          border-radius: 20px;

          .left {
            display: flex;
            align-items: center;
            gap: 14px;

            .glass {
              width: 48px;
              height: 48px;
              background: #fefefe;
              opacity: 0.15;
              border-radius: 10px;
            }

            .about-text {
              display: flex;
              flex-direction: column;
              gap: 6px;
              align-items: flex-start;

              span {
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #fefefe;
                opacity: 0.8;
              }
            }

            p {
              font-weight: 500;
              font-size: 15px;
              line-height: 20px;
              color: #fefefe;
            }
          }

          & > .icon {
            min-width: 18px;
            min-height: 18px;
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

  @media (max-width: 1150px) {
    .content__wrapper {
      .top-header {
        padding: 70px 60px;

        h5 {
          font-size: 24px;
        }

        img {
          width: 180px;
          height: 230px;
          right: 10%;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .content__wrapper {
      .top-header {
        padding: 60px 50px;

        h5 {
          font-size: 20px;
        }

        img {
          width: 140px;
          height: 170px;
          right: 10%;
        }
      }
    }
  }

  @media (max-width: 800px) {
    margin-left: 55px;
  }
`;
