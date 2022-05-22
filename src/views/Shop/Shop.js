import React from "react";
import styled from "styled-components";
import Product from "./Product/Product";

const CategoryTwo = styled.div`
  margin: 180px 210px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 68px;
  font-weight: 400;
  color: #000;
  & span{
    font-weight: 700;
  }
`;


function Shop () {
    return(
        <CategoryTwo>
            <Title>
                <p>Shop by the <span>Category</span></p>
            </Title>
            <Product/>
        </CategoryTwo>
    )
}

export default Shop;
