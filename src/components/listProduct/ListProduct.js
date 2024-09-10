import React, { useEffect, useState } from "react";
import "./ListProduct.css"; // Import your CSS file for styling (optional)
import StarRateIcon from "@mui/icons-material/StarRate";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
function ListProduct() {
    const products = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/61gnwDgVZbL._AC_SY200_.jpg",
            name: "Fitbit Watch",
            price: 1000,
            rating: 4,
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/61ftRB6KycL._AC_SY200_.jpg",
            name: "Rounded Watch",
            price: 2000,
            rating: 3,
        },
        {
            id: 3,
            image: "https://m.media-amazon.com/images/I/61gnwDgVZbL._AC_SY200_.jpg",
            name: "Fitbit Watch",
            price: 1000,
            rating: 4,
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/61ftRB6KycL._AC_SY200_.jpg",
            name: "Rounded Watch",
            price: 2000,
            rating: 3,
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/61gnwDgVZbL._AC_SY200_.jpg",
            name: "Fitbit Watch",
            price: 1000,
            rating: 4,
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/I/61ftRB6KycL._AC_SY200_.jpg",
            name: "Rounded Watch",
            price: 2000,
            rating: 3,
        },
        {
            id: 7,
            image: "https://m.media-amazon.com/images/I/61ftRB6KycL._AC_SY200_.jpg",
            name: "Rounded Watch",
            price: 2000,
            rating: 3,
        },
    ];

    // State to manage cart items (replace with your cart implementation)
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]); // Add product to the cart (shallow copy)
    };

    // Function to create product rows with 6 products each
    const createProductRows = () => {
        const productRows = [];
        for (let i = 0; i < products.length; i += 6) {
            const rowProducts = products.slice(i, i + 6);
            productRows.push(
                <div key={i} className="product-row">
                    {rowProducts.map((product) => (
                        <div key={product.id} className="product">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">Price: ${product.price}</p>
                            <p className="product-rating">
                                {Array(product.rating)
                                    .fill()
                                    .map((_, index) => (
                                        <StarRateIcon key={index} color="primary" /> // Yellow stars
                                    ))}
                            </p>
                            <button
                                className="product-add-to-cart"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            );
        }
        return productRows;
    };

    return <div className="products-container"><Header/>{createProductRows()}<Footer/></div>;
}

export default ListProduct;
