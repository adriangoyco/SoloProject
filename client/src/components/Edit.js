import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setImage(res.data.image);
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))

    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
        image,
        name,
        price,
        description,
        })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className= "col-6">
                    <h3>Edit Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="image" className="form-label">Image</label>
                            <input type="text" value={image} className="form-control" onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <div>
                            <label className="form-label">
                                Name
                            </label>
                            <input type= "text" value={name} className="form-control"
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input type= "number" value={price} id="price" className="form-control"
                            onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div>
                        <p><label htmlFor="description" >Description:</label></p>
                        <textarea id="description" value={description} rows="5" column="100" onChange={(e) => 
                            setDescription(e.target.value)}></textarea>
    
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    
    
    
    )




}
export default Edit;