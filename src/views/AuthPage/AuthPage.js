import React from "react";
import {AuthSection, StyleAuth, AuthTitle, Inputs, Checkbox, Terms, SignBtn, HaveAcc} from "./style";
import CloseIcon from "../../assets/img/AuthPage/AuthIcon/CloseIcon";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../ducks/user/actions";
import {Navigate} from "react-router-dom";

function AuthPage () {
    const isLogin = useSelector(state => state.user.isLogged)
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [error, setError] = useState({error: false})

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassValue(e.target.value)
    }

    const userEmail = useSelector(state => state.user.email)
    const userPassword = useSelector(state => state.user.password)

    const dispatch = useDispatch();
    const handleAuth = () => {
        if (emailValue === userEmail && passValue === userPassword) {
            dispatch(login())
        } else {
            setError({
                error: true
            })
        }
    }

    return !isLogin ? ( <AuthSection>
            <StyleAuth>
                <AuthTitle>
                    <p>CREATE ACCOUNT</p>
                    <CloseIcon/>
                </AuthTitle>
                <Inputs>
                    <input type="text" required placeholder='First Name'/>
                    <input type="text" required placeholder='Last Name'/>
                    <input type="email" required placeholder='Email' onChange={handleChangeEmail}/>
                    <input type="password" required placeholder='Password' onChange={handleChangePass}/>
                    <Checkbox>
                        <input type="checkbox" id='checkbox' required/>
                        <label htmlFor="checkbox">Let&apos;s get personal! We&apos;ll send you only the good stuff: <br/>
                        Exclusive early access to Sale, new arrivals and promotions. No nasties.</label>
                    </Checkbox>
                </Inputs>
                <Terms><p>By signing up you agree to <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></p></Terms>
                <SignBtn type='button' onClick={handleAuth}>SIGN UP</SignBtn>
                {error.error && <p className='authError'>incorrect password or email</p>}
                <HaveAcc>
                    <a href='#'>I HAVE AN ACCOUNT</a>
                </HaveAcc>
            </StyleAuth>
        </AuthSection>
    ) : (<Navigate replace to='/' /> )
}

export default AuthPage