import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function RouteGuard({ component: Component, auth, ...rest}) {

    console.log("auth:" + auth)
    console.log("rest:" + rest)
    return(
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}