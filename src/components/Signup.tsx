import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { register } from '../actions/authActions';
import { Navigation} from './Navigation';
import { SocialLogin } from './SocialLogin';
import { IUser } from '../actions/types';

export const Signup: React.FC = () => {
    const [inputs, setInputs] = useState<IUser>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(true);
        if (inputs.firstName && inputs.lastName && inputs.email && inputs.password) {
            dispatch(register(inputs));
            history.push('/login');
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
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
                    <h1>Sign Up</h1>
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input name="firstName" onChange={handleInputChange} value={inputs.firstName}
                                    className="form-control" placeholder="First Name" type="text" />
                                {submitted && !inputs.firstName &&
                                    <div className="invalid-feedback">First name required</div>
                                }
                            </div>
                            <div className="col-6">
                                <input name="lastName" onChange={handleInputChange} value={inputs.lastName}
                                    className="form-control" placeholder="Last Name" type="text" />
                                {submitted && !inputs.lastName &&
                                    <div className="invalid-feedback">Last name required</div>
                                }
                            </div>
                        </div>
                        <div className="mb-3">
                            <input name="email" onChange={handleInputChange} value={inputs.email}
                                className="form-control" placeholder="Email" type="text" />
                            {submitted && !inputs.email &&
                                <div className="invalid-feedback">Email address required</div>
                            }
                        </div>
                        <div className="mb-3 password-block">
                            <input name="password" onChange={handleInputChange} value={inputs.password}
                                type={showPassword ? "text" : "password"}
                                className="form-control" placeholder="Password" />
                            {submitted && !inputs.password &&
                                <div className="invalid-feedback">Password required</div>
                            }
                            <button className="show-password" type="button" onClick={togglePasswordShown}>
                                Show
                            </button>
                        </div>

                        <button className="btn btn-block btn-custom" type="submit">Sign Up</button>

                        <hr className="hr-text" data-content="Or"></hr>
                        <SocialLogin />
                        <p className="have-account">Already have an account? <Link to="/login">Login</Link></p>

                    </form>
                </div>

            </div>
        </div>

    )
}