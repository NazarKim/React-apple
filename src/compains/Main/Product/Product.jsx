import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css'

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных с сервера', error);
            });
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <div className="Product">
                <img src={product.image} alt='' />
                <button className='btn' onClick={() => navigate(-1)}>Назад</button>
                <div>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <p>{product.category}</p>
                </div>
            </div>
        </main>
    );
};

export default Product;
