import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootEl = document.getElementById("root");

let render = () => {
    ReactDOM.render(<BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>, rootEl);
};

if (module.hot) {
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}
render();

registerServiceWorker();