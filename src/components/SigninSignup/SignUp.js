import React, { useState } from 'react';
import styled from 'styled-components';

import {BsFillEyeFill  , BsFillEyeSlashFill} from "react-icons/bs";

const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const { name, email, password, error, success } = values;

    const handleChange = (key) => (event) => {
        setValues({ ...values, error: false, [key]: event.target.value });
        // console.log(values);
    };

    const [showPass , setShowPass] = useState(false);

    const handlePasswordToogle = (e) => {
        const vl =  showPass ? false : true;
        setShowPass(vl);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: false });


    };

    return (
        <Container>
            <form
                id="signup"
                className="input-group"
            >
                <div className="LSbox ">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label lsLabel">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control LSinputField"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            autoComplete="name"
                            onChange={handleChange("name")} value={name}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label lsLabel">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control LSinputField"
                            id="userEmail"
                            name="userEmail"
                            placeholder="example@gmail.com"
                            autoComplete="email"
                            onChange={handleChange("email")} value={email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label lsLabel">
                            Password
                        </label>
                        <div className="input-group mb-3">
                            <input
                                type={showPass ? "text" : "password"}
                                className="form-control LSinputField"
                                id="userPassword"
                                name="userPassword"
                                placeholder="password"
                                autoComplete="current-password"
                                onChange={handleChange("password")} value={password}
                                required
                            />
                            <button type="button" className="btn border-bottom bg-secondary bg-gradient text-white" onClick={(e) => {
                                handlePasswordToogle(e);
                            }}>
                                {showPass ? <BsFillEyeSlashFill / > : <BsFillEyeFill /> }
                            </button>
                        </div>
                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary" onClick={onSubmit} />
                </div>
            </form>
        </Container>
    )
}

export default SignUp;

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    form label{
        font-weight:bold;
    }
`;
