import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './products.css'
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://fakestoreapi.com/products'
            )
            .then((response) => {
                const data = response.data;
                setProducts(data);
            })
            .catch((error) => {
                console.error('Произошла ошибка при получении данных с сервера', error);
            });
    }, []);

    return (
        <main>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt=""/>
                        <h2>{product.title}</h2>
                        <p>{product.price}$</p>
                        <Link className='button' to={`/react-apple/products/${product.id}`}>Купить</Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Products;
