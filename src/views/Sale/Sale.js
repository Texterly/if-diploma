import React from "react";
import styled from "styled-components";
import Items from "./Items/Items";

const CategoryThree = styled.div`
  margin: 360px 207px 200px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 68px;
  font-weight: 400;
  color: #000;
  margin-bottom: 166px;
  & span{
    font-weight: 700;
  }
`;

function Sale() {
    return(
        <CategoryThree>
            <Title>
                <p>#MODNIKKY_ <span>Sale</span></p>
            </Title>
            <Items/>
        </CategoryThree>
    )
}

export default Sale;
