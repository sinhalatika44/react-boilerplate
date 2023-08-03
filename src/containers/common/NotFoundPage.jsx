import React from 'react';
// import NavPage from "./NavPage";

function NotFoundPage () {
    return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              404 - page not found.
            </p>
            <a
              className="App-link"
              href="/"
              rel="noopener noreferrer"
            >
              Go Home
            </a>
          </header>
        </div>
      );
}

export default NotFoundPage;