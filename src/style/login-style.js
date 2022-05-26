import styled from 'styled-components';

const ContainerLogin = styled.div`
  align-items: center;
  background-color: #575656;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Nunito";
  position: absolute;
  height: 200px;
  left: 40%;
  top: 30%;
  width: 280px;

  h1 {
    color: #aeee00;
    display: flex;
    justify-content: space-around;
    user-select: none;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    padding: 10px;
    user-select: none;
    width: 99%;

    input {
      border: none;
      border-radius: 20px;
      padding: 10px;
      margin-bottom: 10px;
      outline: none;
    }

    button {
      background-color: #444444;
      color: #aeee00;
      border-radius: 10px;
      margin-left: 22%;
      padding: 5px;
      width: 80px;
      text-transform: uppercase;

      :disabled {
        background-color: lightgray;
        color: #e25858;
      }
    }

  }
`;

export default ContainerLogin;
