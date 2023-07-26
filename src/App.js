import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './compains/Header/Header';
import Main from './compains/Main/Main';
import Footer from './compains/Footer/Footer';
import Selection1 from './compains/Main/Selections/Selection1';
import Selection2 from './compains/Main/Selections/Selecrtion2';
import Inf from './compains/Main/Navbar-main/Inf';
import Products from './compains/Main/Navbar-main/Products';
import Product from './compains/Main/Product/Product';

function App(props) {
    return (
        <div className="App">
            <Header headerData={props.server.header} />
            <Routes>
                <Route path="/react-apple/products/:id" element={<Product />} />
                <Route
                    path="/react-apple/information"
                    element={<Inf headerData={props.server.main} />}
                />
                <Route
                    path="/react-apple/products"
                    element={<Products headerData={props.server.main} />}
                />
                <Route
                    path="/react-apple/selection1"
                    element={<Selection1 selectionData={props.server.main} />}
                />
                <Route
                    path="/react-apple/selection2"
                    element={<Selection2 selectionData={props.server.main} />}
                />
                <Route path="/react-apple" element={<Main mainData={props.server.main} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
