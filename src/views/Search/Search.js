import React from "react";
import styled from "styled-components";

const StyleSearch = styled.div`
  min-width: 2880px;
  min-height: 1674px;
  background: #E5E5E5;
  display: flex;
  & svg {
        margin: 362px 0 0 426px;
  }
  & input {
    background: transparent;
    font-size: 64px;
    font-weight: 400;
    ::-webkit-input-placeholder { /* WebKit browsers */
      color: white;
    }
    width: 2074px;
    height: 102px;
    border-bottom: 6px solid #fff;
    margin: 344px 0 0 168px;
    padding-bottom: 22px;
    outline: none;
  }
`;

function SearchPage () {
    return (
        <StyleSearch>
            <div>
                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3.24197L90.9997 91M91 3L3.00027 90.758" stroke="white" strokeWidth="6"/>
                </svg>
            </div>
            <div>
                <input type="text" placeholder='ENTER SEARCH TERMS'/>
            </div>
        </StyleSearch>
    )
}

export default SearchPage