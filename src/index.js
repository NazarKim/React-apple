import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import server from "./server/server";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App server = {server}/>
    </BrowserRouter>
);

