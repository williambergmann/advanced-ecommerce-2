import React from "react";

const ProductDetail = (props) => {
    return (
        <div className="grid_1_of_5 images_1_of_5">
            <img src={props.product.imgUrl} />
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <h4><span>{props.product.sale}</span>{props.product.price}</h4>
            <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
        </div>
    );
}

export default ProductDetail;
