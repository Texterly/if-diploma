import styled from "styled-components";

export const StyleItems = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  //position: relative;
`;

export const Items = styled.div`
  position: relative;
  width: 600px;
  height: 890px;
  & img {
    width: 600px;
    height: 800px;
  }
`;

export const Like = styled.svg`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const Discount = styled.div`
position: absolute;
  left: 0;
  bottom: 90px;
  width: 88px;
  height: 48px;
  color: #fff;
  background: #D7302D;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 400;
`;

export const Sale = styled.div`
  display: flex;
  margin-top: 32px;
  & p{
    &:nth-child(1){
      color: #000;
      font-size: 36px;
      font-weight: 400;
      margin-right: 24px;
      text-decoration: line-through;
    }
    &:nth-child(2){
      color: #D7302D;
      font-size: 40px;
      font-weight: 700;
    }
  }
`;

