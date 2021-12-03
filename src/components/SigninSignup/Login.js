import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { signin, authenticate, isAuthenticated } from "../../auth/helper";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        didRedirect: false,
        error: "",
        loading: false,
    });

    const { email, password, loading, didRedirect, error } = values;

    const { user } = isAuthenticated();

    const handleChange = (key) => (event) => {
        setValues({ ...values, error: false, [key]: event.target.value });
    };

    const performRedirect = () => {
        if (didRedirect) {
            // console.log(user)
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else if (user && user.role === 2) {
                return <Redirect to="/superadmin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
          return <Redirect to="/" />;
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: false, loading: true });
        let name = "ridham";
        signin({name ,  email, password })
          .then((data) => {
              console.log("data:" , data);
            if (data.error) {
              setValues({ ...values, error: data.error, loading: false });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                  email: "",
                  password: "",
                  error: "",
                  didRedirect: true,
                });
              });
            }
          })
          .catch("Some error Ocuured");
    };
    const loadingMessage = () => {
        return (
            loading && (
                <div className=" text-center my-2">
                    <div className="spinner-border text-primary " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        );
    };
    const errorMessage = () => {
        return (
            error && (<div className="row">
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

            </div>)
        );
    };
    const [showPass, setShowPass] = useState(false);

    const handlePasswordToogle = (e) => {
        const vl = showPass ? false : true;
        setShowPass(vl);
    };
    return (
        <Container>
            <form id="login" className="input-group">
                <div className="LSbox loginBox">
                    {loadingMessage()}
                    {errorMessage()}

                    <div className="mbottom-3">
                        <label htmlFor="userEmail" className="form-label lsLabel">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control LSinputField"
                            id="userEmail"
                            placeholder="example@gmail.com"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange("email")}
                            required
                        />
                    </div>
                    <div className="mbottom-3">
                        <label htmlFor="userPassword" className="form-label lsLabel psLabel">
                            Password
                        </label>
                        <div className="inputGroup mbottom-3 pBlock">
                            <input
                                type={showPass ? "text" : "password"}
                                className="form-control LSinputField"
                                id="userPassword"
                                placeholder="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChange("password")}
                                required
                            />
                            <button type="button" className="btn border-bottom bg-secondary bg-gradient text-white" onClick={(e) => {
                                handlePasswordToogle(e);
                            }}>
                                {showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                            </button>
                        </div>
                    </div>
                    <div
                        className="d-flex justify-content-between"
                        id="groupRememberForget"
                    >
                        <div className="mbottom-3">
                            <label htmlFor="userEmail" className="form-label lsLabel">
                                <Link to="/ForgetPassword"

                                    rel="noreferrer"
                                    className="text-dark"
                                >
                                    Forget Password ?
                                </Link>
                            </label>
                        </div>
                    </div>

                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                        onClick={onSubmit}
                    />
                </div>
            </form>
            {performRedirect()}
        </Container>
    )
}

export default Login;
const Container = styled.div`
    margin-left:auto;
    margin-right:auto;
    margin-top:16px;
`;