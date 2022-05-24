import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../../../ducks/user/actions";
import styled from "styled-components";

const OutBtn = styled.div`
  cursor: pointer;
`;

function SignOut () {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <OutBtn onClick={handleLogOut}>SIGN OUT</OutBtn>
    )
}

export default SignOut