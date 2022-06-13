import {Wrapper, StyleHeader, NavLeft, NavRight, Search} from "./style";
import React from "react";
import BrandLogo from "../../../assets/img/MainPage/BrandLogo";
import SignOut from "./SignOut/SignOut";
import SignIn from "./SignIn/SignIn";
import {useSelector} from "react-redux";
// import {Link} from "react-router-dom";

function Header({wrapperStyle,
                    userWantsToSearch,
                    setUserWantsToSearch
                }) {
    const isLogin = useSelector(state => state.user.isLogged);
    const handleSearchClick = () => {
        setUserWantsToSearch(!userWantsToSearch)
    }

    return(
        <Wrapper>
            <StyleHeader style={wrapperStyle}>
                <NavLeft>
                    <div>NEW ARRIVALS</div>
                    <div>SHOP</div>
                    <div>COLLECTIONS</div>
                </NavLeft>
                <BrandLogo/>
                <NavRight>
                    <div style={wrapperStyle} onClick={handleSearchClick}>
                        <Search>
                            <svg width="24" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={wrapperStyle}>
                                <path d="M23.7061 22.5569L17.9363 16.7671C19.3665 15.0174 20.2286 12.7762 20.2286 10.3335C20.2286 4.73041 15.698 0.184082 10.1143 0.184082C4.52571 0.184082 0 4.73041 0 10.3335C0 15.9365 4.52571 20.4828 10.1143 20.4828C12.5486 20.4828 14.7771 19.6227 16.5208 18.1876L22.2906 23.9725C22.6824 24.3656 23.3143 24.3656 23.7061 23.9725C24.098 23.5842 24.098 22.9452 23.7061 22.5569ZM10.1143 18.4628C5.64245 18.4628 2.00816 14.8159 2.00816 10.3335C2.00816 5.85102 5.64245 2.19921 10.1143 2.19921C14.5812 2.19921 18.2204 5.85102 18.2204 10.3335C18.2204 14.8159 14.5812 18.4628 10.1143 18.4628Z"/>
                            </svg>
                            <p>SEARCH</p>
                        </Search>
                    </div>
                    {
                        isLogin ? <SignOut/> : <SignIn/>
                    }
                    <div>BAG (2)</div>
                    <div>
                        <svg width="27" height="24" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={wrapperStyle}>
                            <path d="M25.0938 2.41993C23.6644 0.985503 21.7719 0.201504 19.7521 0.201504C17.7324 0.201504 15.8341 0.99131 14.4047 2.42574L13.6581 3.17489L12.9 2.41412C11.4705 0.979695 9.56646 0.184082 7.54669 0.184082C5.5327 0.184082 3.63447 0.973888 2.21079 2.40251C0.781319 3.83693 -0.00575563 5.74176 3.16897e-05 7.76854C3.16897e-05 9.79532 0.792894 11.6943 2.22236 13.1288L13.0909 24.0351C13.2414 24.186 13.444 24.2673 13.6407 24.2673C13.8375 24.2673 14.0401 24.1919 14.1905 24.0409L25.0823 13.152C26.5117 11.7176 27.2988 9.81274 27.2988 7.78596C27.3046 5.75918 26.5233 3.85436 25.0938 2.41993ZM23.9827 12.0428L13.6407 22.3799L3.32195 12.0254C2.18764 10.8871 1.56261 9.37719 1.56261 7.76854C1.56261 6.15989 2.18185 4.64997 3.31616 3.51753C4.44469 2.38508 5.94939 1.75789 7.54669 1.75789C9.14978 1.75789 10.6603 2.38508 11.7946 3.52333L13.1025 4.83581C13.4092 5.1436 13.9012 5.1436 14.2079 4.83581L15.5042 3.53495C16.6386 2.3967 18.1491 1.7695 19.7464 1.7695C21.3436 1.7695 22.8484 2.3967 23.9827 3.52914C25.117 4.66739 25.7362 6.17731 25.7362 7.78596C25.742 9.39461 25.117 10.9045 23.9827 12.0428Z"/>
                        </svg>
                    </div>
                </NavRight>
            </StyleHeader>
        </Wrapper>
    )
}

export default Header