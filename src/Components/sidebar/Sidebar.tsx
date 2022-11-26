import styled from "styled-components";

// logo
// import logo from "../../assets/logo/Logo.png"

export default function Sidebar() {
  return (
    <StyledSidebar>
      <div className="top">
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="bottom">
        <ul className="lists__wrapper">
          <li className="list">
            <i className="icon"></i>
            <p>Dashboard</p>
          </li>
          <li className="list">
            <i className="icon"></i>
            <p>Учитиля</p>
          </li>
          <li className="list">
            <i className="icon"></i>
            <p>Учитиля</p>
          </li>
          <li className="list">
            <i className="icon"></i>
            <p>Классы</p>
          </li>
          <li className="list">
            <i className="icon"></i>
            <p>Чат</p>
          </li>
          <li className="list">
            <i className="icon"></i>
            <p>Настройки</p>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  .top {
    
  }

  
`;
