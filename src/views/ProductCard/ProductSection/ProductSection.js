// import {useParams} from "react-router-dom"
import React from "react";
import styled from "styled-components";
// import {useDispatch, useSelector} from "react-redux";
// import {getProduct} from "../../../ducks/products/actions";

const StyleImage = styled.div`
display: flex;
  justify-content: center;
`;

function ProductSection () {
//     const products = useSelector((state)=> state.product)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getProduct())
    // },[])

    return (
        <div>
            <StyleImage>
                {/*<p>{products.name}</p>*/}
                {/*<img src={productData.images[0]} alt={productData.name}/>*/}
            </StyleImage>
        </div>
    )
}

export default ProductSection