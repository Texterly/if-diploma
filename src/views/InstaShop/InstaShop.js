import React from "react";
import NextIcon from '../../assets/img/InstaShop/next-icon.png';
import Mask1 from '../../assets/img/InstaShop/mask1.png';
import Mask2 from '../../assets/img/InstaShop/instagram-image-placeholder-2.png';
import Mask3 from '../../assets/img/InstaShop/instagram-image-placeholder-3.png';
import Mask4 from '../../assets/img/InstaShop/instagram-image-placeholder-4.png';
import Mask5 from '../../assets/img/InstaShop/instagram-image-placeholder-5.png';
import {Wrapper, Category, InstaHeader, Models, ModelsOne, ModelsTwo, Hashtag} from "./style";

function InstaShop() {
    return(
        <Wrapper>
            <Category>
                <InstaHeader>
                    <div><p>SHOP INSTAGRAM</p><p>SHOP</p><img src={NextIcon} alt="arrow"/></div>
                </InstaHeader>
                <Models>
                    <img src={Mask1} alt="Mask"/>
                    <div>
                        <ModelsOne>
                            <div><img src={Mask2} alt="Mask"/></div>
                            <div><img src={Mask3} alt="Mask"/></div>
                        </ModelsOne>
                        <ModelsTwo>
                            <img src={Mask4} alt="Mask"/>
                            <img src={Mask5} alt="Mask"/>
                        </ModelsTwo>
                    </div>
                </Models>
                <Hashtag>#MODNIKKY</Hashtag>
            </Category>
        </Wrapper>
    )
}

export default InstaShop;
