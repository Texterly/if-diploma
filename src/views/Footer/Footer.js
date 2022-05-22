import React from "react";
import styled from "styled-components";
import LinkColumn from "./LinkColumn/LinkColumn";

const StyleFooter = styled.div`
  width: 2130px;
  height: 790px;
  margin: 180px 543px 180px 207px;
`;

const HeadFooter = styled.div`
  width: 800px;
  height: 217px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 480px 0 850px;
`;

const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
`;

const PromoText = styled.div`
  margin: 18px 0 80px 0;
  font-size: 24px;
  font-weight: 400;
`;

const Mail = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  & input {
    font-size: 32px;
    font-weight: 400;
    outline: none;
  }
`;

const FooterBtn = styled.button`
  background: transparent;
  font-size: 32px;
  font-weight: 400;
  &:hover {
    color: #D7302D;
  }
`;

const FooterBody = styled.div`
  text-decoration: none;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
`;


function Footer() {

    const firstLinks = ['CUSTOMER SERVICE', 'CONTACT', 'TRACK ORDER', 'DELIVERY & RETURNS', 'PAYMENT', 'MAKE A RETURN', 'FAQ']
    const secondLinks = ['INFO', 'GIFT VOUCHERS', 'SIZE GUIDE', 'CAREERS AT MODNIKKY', 'ABOUT US', 'LEGAL POLICIES']
    const thirdLinks = ['FOLLOW US', 'FACEBOOK', 'ODNOKLASSNIKI', 'INSTAGRAM']
    const fourthLinks = ['CONTACT US', 'hello@modnikky.com', '+7 910 832\n' + '26XX', 'Visit us at Shalalaeva 23,\n' +
    'Bologoe, Russia']

    return(
        <StyleFooter>
            <HeadFooter>
                <SectionTitle><p>SIGN UP FOR UPDATES</p></SectionTitle>
                <PromoText><p>Sign up for exclusive early sale access and tailored new arrivals.</p></PromoText>
                <Mail>
                    <input type="email" id='footerInput' required placeholder='Your email address'/>
                    <label htmlFor="footerInput"></label>
                    <FooterBtn type='button'>JOIN</FooterBtn>
                </Mail>
            </HeadFooter>
            <FooterBody>
                <LinkColumn arrLinks={firstLinks} />
                <LinkColumn arrLinks={secondLinks} />
                <LinkColumn arrLinks={thirdLinks} />
                <LinkColumn arrLinks={fourthLinks} />
            </FooterBody>
        </StyleFooter>
    )
}

export default Footer;
