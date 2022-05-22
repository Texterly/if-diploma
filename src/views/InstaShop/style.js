import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 354px;
`;

export const Category = styled.div`
  width: 2466px;
  height: 1436px;
`;

export const InstaHeader = styled.div`
  margin-bottom: 46px;
  & div {
    display: flex;
    align-items: center;
    & p {
      font-size: 32px;
      font-weight: 400;
      margin: 2px;
      &:nth-child(1) {
        margin-right: 142px;
      }
      &:nth-child(2) {
        margin-right: 30px;
      }
      }
    & img {
      width: 24px;
      height: 24px;
      
    }
    }
`;

export const Models = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  &:first-child{
      width: 1260px;
      height: 1252px;
  }
  
`;

export const ModelsOne = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
`;

export const ModelsTwo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
`;

export const Hashtag = styled.p`
  font-size: 32px;
  font-weight: 400;
  margin-top: 60px;
`;