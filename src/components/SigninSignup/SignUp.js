import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { signupme } from '../../auth/helper';
import InputGroup from 'react-bootstrap/InputGroup';




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

    const [showPass, setShowPass] = useState(false);

    const handlePasswordToogle = (e) => {
        const vl = showPass ? false : true;
        setShowPass(vl);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: false });

        signupme({ name, email, password })
            .then((data) => {
                // console.log(data);
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        success: false,
                    });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        error: "",
                        password: "",
                        success: true,
                    });
                }

            })
            .catch(
                console.log("Error in signup")
                // (err) => {
                //     setValues({
                //         ...values,
                //         error: err,
                //         success: false,
                //     })
                // }


            );
    };
    const successMessage = () => {
        return (
            success && (<div className="row">
                <div
                    className="alert alert-success "
                    style={{ display: success ? "" : "none" }}
                >
                    <p>New Account was created successfully!!. <br />A verification link has been sent to your registered email. Come back and {" "}
                    <Link to="/signin">Login Here</Link></p>
                </div>

            </div>)
        );
    };
    const errorMessage = () => {
        return (
            error && (<div className="row">
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    <p>{error}</p>
                </div>

            </div>)
        );
    };

    return (
        <Container>

            <form
                id="signup"
                className="input-group"
            >
                <div className="LSbox ">
                    <div className="mbottom-3">
                        {successMessage()}
                        {errorMessage()}
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
                    <div className="mbottom-3">
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
                    <div className="mbottom-3">
                        <label htmlFor="userPassword" className="form-label lsLabel psLabel">
                            Password<br />
                        </label>
                        <div className="inputGroup mbottom-3 pBlock">
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
                                {showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
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
    margin-top:16px;

    form label{
        font-weight:bold;
    }
`;
