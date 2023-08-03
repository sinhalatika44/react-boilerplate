import cookie from 'react-cookies';
import { useState } from "react";
// import { Auth } from "aws-amplify";

// Sets user details in localStorage

export default function AppAuth() {
    const [isAuthenticated, setAuth] = useState(false);
    return isAuthenticated;
}
// function setSession(data) {
//     let authk = data.auth_token;
//     let username = data.loginOutput.name;
//     let userId = data.loginOutput.email;
//     let id = data.loginOutput.userId;
  
  
//     let loginInfo = JSON.stringify(data.loginOutput);
//     console.log(loginInfo);
//     let expiresAt = JSON.stringify((27000 * 1000) + new Date().getTime());
//     cookie.save('React_dash_token', authk, { path: '/' })
//     cookie.save('username', username, { path: '/' });
//     cookie.save('userId', userId, { path: '/' });
//     cookie.save('id', id, { path: '/' });
//     // localStorage.setItem('sessionInfo', data.loginOutput);
//     localStorage.setItem('React_expires_at', expiresAt);
//     localStorage.setItem('last_loggedin_time', new Date());
// };
  
// export default function isAuthenticated() {
//     let expiresAt = JSON.parse(localStorage.getItem('React_expires_at'));
//     return new Date().getTime() < expiresAt;
// };

// function isAuthorized() {

//     return true;
//     // let expiresAt = JSON.parse(localStorage.getItem('React_expires_at'));
//     // return new Date().getTime() < expiresAt;
// };

