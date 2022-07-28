import axios from "axios";
import { useEffect, useState, } from "react";
import React from "react";
import {useParams, Link} from "react-router-dom";

const View = (props) => {

    const [productData, setProductData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response.data);
            setProductData(response.data);
        })
        .catch((err) => console.log(err.response));
    }, [id]);




    return (
        <div className="container">
            <div className="row">
                <div className= "col-6">
                    
                        <div>
                            <label htmlFor="image" className="form-label">Image <img src={productData.image} alt="" style={{ height: "160px" }}/></label>
       
                        </div>
                        <div>
                            <label htmlFor="name" className="form-label">
                                Name: {productData.name}
                            </label>

                        </div>
                        <div>
                            <label htmlFor="price" className="form-label">
                                Price: {productData.price}
                            </label>

                        </div>
                        <div>
                        <p><label htmlFor="description" >Description: {productData.description}</label></p>

    
                        </div>
                        <Link to={"/"}>Home</Link>
                        
                    
                </div>
            </div>
        </div>
    
    
    
    )
};

export default View;