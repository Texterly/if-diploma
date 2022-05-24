/* eslint-disable */
import React from "react";
import styled from "styled-components";

const FooterColumn = styled.div`
  list-style-type: none;
  white-space: pre;

  a {
    color:#000;
    text-decoration: none;
  }
  
  li {
    &:not(:last-child) {
      margin-bottom: 36px;
    }
    &:first-child {
      margin-bottom: 60px;
    }
  }
`;

function LinkColumn({arrLinks}) {
    return <FooterColumn>
        {arrLinks.map((link, index) => {

                return <li style={index === 0 ? {fontSize: 32} : {fontSize: 24}}
                           key={index}>
                    <a href="#">{link}</a>
                </li>
            }
        )}
    </FooterColumn>
}

export default LinkColumn