import React, { useState }  from "react";
import CartItem from "./CartItem";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Product from "./Product";

const Page = () => {
    
    const [data, setData] = useState({
        "Fancy_Product": {enabled: true, addedToCart: false, text:"Fancy Product", price:"$40.00 - $80.00", range:true},
        "Special_Item": {enabled: true, addedToCart: false, text: "Special Item", price:"$18.00", salePrice:"$20.00"},
        "Sale_Item": {enabled: true, addedToCart: false, text: "Sale Item", price:"$25.00", salePrice:"$50.00"},
        "Popular_Item": {enabled: true, addedToCart: false, text: "Popular Item", price:"$40.00"},
        "Sale_Item2": {enabled: true, addedToCart: false, text: "Sale Item", price:"$25.00", salePrice:"$50.00"},
        "Fancy_Product2": {enabled: true, addedToCart: false, text:"Fancy Product", price:"$120.00 - $280.00", range:true},
        "Special_Item2": {enabled: true, addedToCart: false, text: "Special Item", price:"$18.00", salePrice:"$20.00"},
        "Popular_Item2": {enabled: true, addedToCart: false, text: "Popular Item", price:"$40.00"},
    })
        
    const [count, setCount] = useState(0);

    const addCart = (item) => {
        let updatedItem = data[item];
        updatedItem.addedToCart = true;
        setData(prevState => ({
            ...prevState,
            [item]: updatedItem
        }));
        console.log("Added", item);
        setCount(count+1);
    }

    const [showCart, setShowCart] = useState(false);
    const showCartPage = () => {
        console.log("cat")
        setShowCart(true);
    }

    const closeModal = () => {
        console.log("close")
        setShowCart(false);
    }

    const removeProduct = (item) => {
        let updatedItem = data[item];
        updatedItem.addedToCart = false;
        setData(prevState => ({
            ...prevState,
            [item]: updatedItem
        }));
        console.log("Removed", item);
        setCount(count-1);
    }
    return (
        <>
            <NavBar itemCount = {count} showCartPage={showCartPage} showCart={showCart}/>
            <Header />
            <Product productsConfiguration = {data} addCart= {addCart}/>
            <Footer />
            {showCart && <CartItem closeModal={closeModal} products={data} removeProduct={removeProduct} />}
        </>
    );
}

export default Page;