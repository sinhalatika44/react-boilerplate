import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

class ReactApp extends React.Component {

  componentDidMount() {
    //do nothing
  }
  
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
);
// ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
