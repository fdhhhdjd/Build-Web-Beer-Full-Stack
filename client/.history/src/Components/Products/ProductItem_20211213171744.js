import React from 'react'

const ProductItem = ({product}) => {
    return (
        <>
         <div className="product_card">
    
        <img src={product.images.url} alt="" />

        <div className="product_box">
          <h2 title={product.title}>{product.title}</h2>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>   
        </>
    )
}

export default ProductItem
