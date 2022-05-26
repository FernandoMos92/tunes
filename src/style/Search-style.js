import styled from "styled-components";

const ContainerSearch = styled.div`
  align-items: center;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    user-select: none;
    display: flex;
    input {
      outline: none;
      cursor: auto;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 300px;
      padding: 5px;
    }

    button {
      background-color: #575656;
      color: #aeee00;
      cursor: pointer;
      text-transform: uppercase;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 5px;
      width: 100px;
      align-items: center;
      justify-content: center;
      display: flex;

      .icon-search {
        margin-left: 8px;
      }

      :disabled {
        background-color: white;
        color: lightgray;
      }
    }
  }

  .result-search {
    margin-top: 20px;
    margin-right: 240px;
  }
`;

export default ContainerSearch;
