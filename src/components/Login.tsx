import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import { login } from '../actions/authActions';
import { Navigation } from './Navigation';
import { SocialLogin } from './SocialLogin';
import { ILoginData, IRootState } from '../actions/types';

export const Login: React.FC = () => {
    const [inputs, setInputs] = useState<ILoginData>({
        email: '',
        password: '',
        remember: false
    });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [credentialsCorrect, setCredentialsCorrect] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isAuthenticated = useSelector((state: IRootState) => state.isAuthenticated);
    const user = useSelector((state: IRootState) => state.user);
    const dispatch = useDispatch();

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(true);
        if(inputs.email && inputs.email === user.email && inputs.password && inputs.password === user.password) {
            dispatch(login(inputs));
        }else {
            setCredentialsCorrect(false);
        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.name === 'remember' ? target.checked : target.value;
        const name = target.name;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const togglePasswordShown = () => {
        setShowPassword(showPassword ? false : true);
    };
    return (
        <div className="background">
            <div className="popup-box">
                <Navigation />
                <div className="popup-box-body">
                    <button type="button" className="close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h1>Login</h1>
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input name="email" onChange={handleInputChange} value={inputs.email}
                                className="form-control" placeholder="Email" type="text" />
                        </div>
                        <div className="mb-3 password-block">
                            <input name="password" onChange={handleInputChange} value={inputs.password}
                                type={showPassword ? "text" : "password"}
                                className="form-control" placeholder="Password" />
                            {submitted && !credentialsCorrect &&
                                <div className="invalid-feedback">This combination of email address and password is incorrect.</div>
                            }
                            <button className="show-password" type="button" onClick={togglePasswordShown}>
                                Show
                            </button>
                        </div>
                        <div style={{marginBottom: 9}}>
                            <input name="remember" type="checkbox" onChange={handleInputChange} checked={inputs.remember}
                                    className="custom-checkbox" id="remember-me" />
                            <label htmlFor="remember-me" className="form-check-label">
                                Remember me
                            </label>
                        </div>

                        <button className="btn btn-block btn-custom" type="submit">Login</button>

                        <Link to="/forgot" className="forgot-password-link">Forgot Password</Link>

                        <hr className="hr-text" data-content="Or"></hr>
                        <SocialLogin />
                        <p className="have-account">Don't have an account? <Link to="/signup">Sign Up</Link></p>

                    </form>
                </div>

            </div>
        </div>

    )
}