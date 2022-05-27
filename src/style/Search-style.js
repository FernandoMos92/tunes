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
    display: inline;
    width: 400px;
    padding: 5px;
    margin-top:20px;
  }

  .result-search > h4 {
    display: inline;
  }

  .result-search > span {
    text-transform: uppercase;
    color: #666;
    font-weight: 400;
  }
`;

export default ContainerSearch;
