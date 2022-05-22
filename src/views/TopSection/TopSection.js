import Header from "./Header/Header";
import React from "react";
import styled from "styled-components";
import MainBackground from '../../assets/img/MainPage/mask.jpg'
import CategoryOne from "./CategoryOne/CategoryOne";

const MainSection = styled.div`
  background: url(${props => props.background});
  background-size: cover, 100%;
  //min-height: 100vh;
  //width: 100%;
  max-width: 2880px;
  height: 1674px;
`;



function TopSection () {
    return(<>
        <MainSection background={MainBackground}>
            <Header/>
            <CategoryOne/>
        </MainSection>
        </>
    )
}

export default TopSection