import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

// Import the product data from the JSON file
import productsData from "../../Data/products.json";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1"); // Set default image to "img1"
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  // Find the product with the matching 'id' from the 'productsData' array
  const product = productsData.find((item) => item.id === parseInt(id));

  return (
    <div className="product">
      {product ? (
        <>
          <div className="left">
            <div className="images">
              <img
                src={product.img1}
                alt=""
                onClick={() => setSelectedImg("img1")} // Set 'selectedImg' to "img1" on click
              />
              <img
                src={product.img2}
                alt=""
                onClick={() => setSelectedImg("img2")} // Set 'selectedImg' to "img2" on click
              />
            </div>
            <div className="mainImg">
              <img src={product[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{product?.title}</h1>
            <span className="price">₹{product?.price}</span>
            <p>{product?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    desc: product.desc,
                    price: product.price,
                    img: product.img,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Product;
