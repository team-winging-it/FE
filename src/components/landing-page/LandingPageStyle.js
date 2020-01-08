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
  height: 100vh;
  // margin: 1rem;
  position: relative;
  width: 1250px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 10px 9px rgba(0, 0, 0, 0.22);
  .new-card{
    width:300px;
    height: 500px;
    margin-top:100px;
    margin-left: 10px;
  }
  .new-card:hover{
    box-shadow: none;
  }
`;

export const Nav = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 70px;
  top: 0px;
  
  margin-bottom: 1rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 3px 8px rgba(0, 0, 0, 0.22);
  .submit-btn{
    margin-left: 20px;
    background: #000;

  }
  .submit-btn:hover{
    background: blue;
    
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
