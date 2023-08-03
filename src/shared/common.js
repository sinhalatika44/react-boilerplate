import { Auth } from "aws-amplify";
import cookie from 'react-cookies';
import AuthClass from "./AuthClass";

function logoutUser() {
    try {
      Auth.signOut()
        .then(data => {
          cookie.remove('React_dash_token', { path: '/' })
          cookie.remove('username', { path: '/' });
          cookie.remove('userId', { path: '/' });
          cookie.remove('orgId', { path: '/' });
          localStorage.clear();
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err)
    }
};
  
function getToken() {
    return AuthClass.getToken();
}

module.exports = {
    logoutUser: logoutUser,
    getToken: getToken
};