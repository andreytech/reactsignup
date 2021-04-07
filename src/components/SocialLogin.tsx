import React from 'react';

export const SocialLogin: React.FC = () => {
    return (
        <div className="row">
            <div className="col-6">
                <button className="btn btn-block btn-facebook">
                    <i className="fa fa-facebook"></i>
                    <span>Facebook</span>
                </button>
            </div>
            <div className="col-6">
                <button className="btn btn-block btn-google">
                    <i className="fa fa-google"></i>
                    <span>Google</span>
                </button>
            </div>
        </div>

    );
}