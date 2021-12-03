import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from "../Home/navigation";
import SignUp from './SignUp';
import "./LoginSignUp.css";
import Login from './Login';

const LoginSignUp = ({ isLogin }) => {
    const [isLogged, setIsLogged] = useState(isLogin);
    return (
        <>
        <Navigation />
        <Container>
            <DoubleContainer>
                <LeftBox>
                    SLIET Alumini Portal
                </LeftBox>
                <RightBox>
                    <h3>Join the Alumini Portal</h3>
                    {isLogged ? <><p>Create a new account <span onClick={(e) => { setIsLogged(false) }}>Sign Up</span></p><Login /></> : <><p>Already have an account <span onClick={(e) => {

                        setIsLogged(true);
                    }}>Sign In</span></p> <SignUp /></>}
                </RightBox>
            </DoubleContainer>

        </Container>
        </>
    )
}

export default LoginSignUp;

const Container = styled.div`
    width:100%;
    height:100%;
    // height:calc(100%);
    background-position:center;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:12px;
    &:before{
        position:absolute;
        content: "";
        top:0;
        right:0;
        bottom:0;
        left:0;
        background-position:center;
        background-image: url("./img/register_bg.jpg");
        background-repeat:no-repeat;
        background-size:cover;
        opacity:0.4;
        z-index:-1;

    }

`;

const DoubleContainer = styled.div`
    width:70vw;       
    // height:60%;
    margin-top:24px;
    border: 1px solid transparent;
    border-radius:8px;
    // padding:12px;
    display:grid;
    grid-template-columns:50% 50%; 
`;

const LeftBox = styled.div`
    color:white;
    font-size:36px;
    font-weight:700;
    text-transform:uppercase;
    background-color:rgba(0,0,255,0.4);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`;
const RightBox = styled.div`
    background-color:white;
    font-size:18px;
    padding:24px;
    display:flex;
    // margin-left:auto;
    flex-direction:column;
    // align-items:center;
    justify-content:center;
    h3 {
        text-align:center;
        font-weight:700;  
    }
    p{
        text-align:center;
    }
    

     p > span{
        color:blue;
        cursor:pointer;
        // text-align:center;
    }
`;