import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
`;

export const StyleHeader = styled.div`
  margin: 40px 120px 0 120px;
  display: flex;
  justify-content: space-between;
  min-width: 2640px;
  height: 50px;
  
`;

export const NavLeft = styled.div`
  display: flex;
  color: #ffffff;
  width: 567px;
  align-items: flex-end;
  & div{
    &:nth-child(1) {
      margin-right: 80px;
    }
    &:nth-child(2) {
      margin-right: 80px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  & svg{
    margin-right: 10px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-self: self-end;
  color: #fff;
  width: 570px;
  height: 28px;
  & div {
    &:nth-child(1) {
      margin-right: 85px;
    }
    &:nth-child(2) {
      margin-right: 80px;
    }
    &:nth-child(3) {
      margin-right: 80px;
    }
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
`;
