import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/configureStore";
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from '../src/common/util/ScrollToTop';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const rootEl = document.getElementById("root");
const store = configureStore();

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>

            </BrowserRouter>
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}
render();

registerServiceWorker();