import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IRootState } from "../actions/types";

interface PrivateRouteProps extends RouteProps {
    component?: any;
  }

export const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const isAuthenticated = useSelector((state: IRootState) => state.isAuthenticated);

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    
    )
}