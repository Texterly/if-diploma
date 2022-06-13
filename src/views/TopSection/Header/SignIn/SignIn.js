import React from "react";
import {Link} from "react-router-dom";

function SignIn ({wrapperStyle}) {
    return (
        <Link to='authorization' style={wrapperStyle}>
            <div style={wrapperStyle}>SIGN IN</div>
        </Link>
    )
}

export default SignIn