import {useSelector} from "react-redux";
import React from "react";
import styled from "styled-components";
import {colors} from "../../data/SiteConfig";
import {loading} from "../../ducks/preLoad/selectors";
import {clickFilter} from "../../ducks/clickFilter/selectors";
import PreLoader from "../../components/PreLoader";
import {goods} from "../../ducks/getAllProducts/selectors";

const Wrapper = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: 50px 32px;
`

const Title = styled.h2`
  color: ${colors.red};
  text-align: center;
  background-color: rgba(208, 196, 185, 0.2);
  padding: 30px 16px;
  border: 2px solid ${colors.red};
`

const  NotFound = ({resultRef}) => {
    const isLoad = useSelector(loading)
    const userClickFilter = useSelector(clickFilter)
    const goodsData = useSelector(goods)

    return (
        <>
            {
                !isLoad && userClickFilter && goodsData.length === 0 ?
                    <Wrapper>
                        <Title>No products found &#9785;&#9785;&#9785;</Title>
                    </Wrapper> : null
            }

            {
                isLoad && userClickFilter && goodsData.length === 0 ? <PreLoader resultRef={resultRef}/> : null
            }
        </>
    )
}

export default NotFound