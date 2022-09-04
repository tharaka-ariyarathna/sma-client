import React from 'react' ;
import ReactDom from 'react-dom/client' ;
import { Provider } from 'react-redux';
import App from './App' ;
import Store from './store/ReduxStore' ;
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;

const root = ReactDom.createRoot(document.getElementById("root")) ;

root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Routes>
                <Route path = "*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>
) ;