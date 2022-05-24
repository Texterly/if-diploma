import styled from "styled-components";

export const AuthSection = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
  max-width: 2880px;
  height: 1674px;
  font-size: 24px;
`;

export const StyleAuth = styled.div`
  width: 996px;
  height: 1125px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthTitle = styled.div`
  width: 836px;
  font-size: 32px;
  font-weight: 400;
  margin: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  width: 798px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  & input {
    height: 46px;
    margin-bottom: 60px;
    font-size: 24px;
    border-bottom: 2px solid #D8D8D8;
    padding-bottom: 2px;
  }
`;

export const Checkbox = styled.div`
  position: relative;
  & input {
    height: 12px;
    color: #000;
    margin: 8px 0 0;
    zoom: 2.5;
  }
  & label {
    position: absolute;
    top: 12px;
    left: 52px;
    font-size: 24px;
    font-weight: 400;
    width: 764px;
    line-height: 1.5;
  }
`;

export const Terms = styled.div`
  margin: 74px 0 0 98px;
  align-self: flex-start;
  font-size: 24px;
  color: #808080FF;
  & a {
    color: #000;
  }
`;

export const SignBtn = styled.button`
  margin: 66px 0 54px;
  width: 480px;
  height: 100px;
  background: #000;
  color: #fff;
  font-size: 32px;
`;

export const HaveAcc = styled.div`
  align-self: flex-start;
  margin-left: 98px;
  & a {
    color: #000;
  }
`;