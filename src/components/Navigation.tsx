import React from 'react';
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            <div className="row">
                <div className="col-6">
                    <Link to="/login" className="btn btn-block btn-nav">Login</Link>
                </div>
                <div className="col-6">
                    <Link to="/signup" className="btn btn-block btn-nav">Sign Up</Link>
                </div>
            </div>
        </div>

    );
}