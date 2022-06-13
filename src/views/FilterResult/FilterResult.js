import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {loading} from "../../ducks/preLoad/selectors";
import {useEffect, useState} from "react";
import FilterCard from "./FilterCard";
import {TransparentBrownBtn} from "../../components/Btns/TransparentBrownBtn";
import {Wrapper} from "../../globalStyles";
import PreLoader from "../../components/PreLoader";


const Section = styled.section`
 
`
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`


const FilterResult = ({sumVisibleCards, setSumVisibleCards, arrayData, condition}) => {

    const isLoad = useSelector(loading);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(arrayData)
    },[arrayData, sumVisibleCards]);

    const handleShowMoreClick = () => {
        setSumVisibleCards((preValue) => preValue + 4)
    };

    return (
        condition && arrayData.length > 0 &&
            <Section>
                <Wrapper>
                    {
                        !isLoad && (
                            <>
                                <h2>{arrayData[0].type}</h2>
                                <CardsWrapper>
                                    {
                                        data.slice(0,sumVisibleCards).map(item => <FilterCard key={item.id} item={item}/>)
                                    }
                                </CardsWrapper>
                                {
                                    sumVisibleCards < data.length && (
                                        <BtnContainer>
                                            <TransparentBrownBtn onClick={handleShowMoreClick} text='SHOW MORE'/>
                                        </BtnContainer>
                                    )
                                }
                            </>
                        )
                    }
                    {
                        isLoad && (
                            <PreLoader/>
                        )
                    }
                </Wrapper>
            </Section>
    )

}

export default FilterResult