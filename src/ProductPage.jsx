import { useState } from "react";
import Item from "./Item";
import { RiDraggable } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const ProductPage = () => {

    const [productList, setProductList] = useState([]);


    return (
        <div className="product-page">
            <h2 className="page-title">Add Products</h2>
            <ul className="product-list">
                <li className="head">
                    <span></span>
                    <h4>Product</h4>
                    <h4>Discount</h4>
                </li>
                {productList.map((product, index) => (
                    <li key={index}>
                        <Item index={index+1} />
                    </li>
                ))}
                {productList.length === 0 ? (
                    <div className="item empty-product">
                        <div className="drag">
                            <RiDraggable className="drag-icon" />
                            <span>1.</span>
                        </div>
                        <div className="product">
                            <span>Select Product</span>
                            <MdEdit/>
                        </div>
                        <div className="discount">
                            <button>
                                Add Discount
                            </button>
                        </div>
                    </div>
                ) :null}
            </ul>
            <button className="add-product-btn">Add Product</button>
        </div>
    )
}

export default ProductPage;