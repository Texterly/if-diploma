import React from "react";
import {Link} from "react-router-dom";

function SignIn () {
    // const [wantsToOut, setWantsToOut] = useState(false);

    // const accountClick = () => {
    //     setWantsToOut(!wantsToOut)
    // }
    return (
        <Link to='authorization'>
            <div>SIGN IN</div>
        </Link>
    )
}

export default SignIn