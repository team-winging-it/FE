import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #282e74;
  //   background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 700px;
  margin: 1rem;
  position: relative;
  width: 1250px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const Nav = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 70px;
  top: 0px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  position: fixed;
  width: 95%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
