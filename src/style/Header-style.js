import styled from 'styled-components';

const Menu = styled.nav`
  background-color: #666666;
  color: #abdb25;
  display: flex;
  height: 10vh;
  justify-content: row;
  justify-content: space-between;
  padding: 10px;

  ol {
    display: flex;
    justify-content: space-around;
    font-family: "Nunito";
    text-transform: uppercase;
    list-style: none;
    width: 300px;

    a {
      text-decoration: none;
      color: #abdb25;
      transition: .1s ease-in-out;
      padding: 10px;
      cursor: pointer;

      :hover {
        border-bottom: 2px groove #FFF;
        transform: translateY(-5px);
        padding: 10px;
        color: #FFF;
      }
    }
  }

  .container-user {
    display: flex;
    align-items: center;
    color: #FFF;

    p {
      margin-right: 5px;
      border-bottom: 2px solid #abdb25;
      font-size: 18px;
    }

    .icon-user {
      font-size: 32px;
    }

  }

`;

export default Menu;