import styled from "styled-components";

const LoginContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    border-radius: 10px;
    border: 0;
    font-size: 80px;
    background: rgba(0, 0, 0, 0.7);
    padding: 30px;
    color: white;
  }
`;

export default LoginContainer;
