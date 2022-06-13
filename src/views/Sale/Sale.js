import React from "react";
import styled from "styled-components";
import Blocks from "./Items/Blocks";

const CategoryThree = styled.div`
  margin: 360px 207px 200px;
  position: relative;
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

function Sale({data}) {
    return(
        <CategoryThree>
            <Title>
                <p>#MODNIKKY_ <span>Sale</span></p>
            </Title>
            <Blocks data={data}/>
        </CategoryThree>
    )
}

export default Sale;
