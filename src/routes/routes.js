import React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../containers/common/NotFoundPage";

// import { fakeAuthProvider } from "../auth";

import {isAuthenticated} from "../shared/AuthClass";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthClass.isAuthenticated() === true && AuthClass.isAuthorized() === true ?
//       <Component {...props} />
//       : AuthClass.isAuthenticated() === true && AuthClass.isAuthorized() !== true ? <Navigate to='/auth/not-authorized' />
//       : <Navigate to='/auth/login' />
//   )} />
// )

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const routes = () =>
  <Routes>
    {/* <Route path="/" element={<PrivateRoute Component={HomePage} />} /> */}
    <Route
        path="/dashboard"
        isAuthenticated={true}
        element={
            <PrivateRoute><HomePage /></PrivateRoute>
        }
    />
    <Route path={`/login`} exact Component={HomePage} />
    { /* Finally, catch all unmatched routes */}
    <Route path="*" Component={NotFoundPage} />
  </Routes>;
export default routes