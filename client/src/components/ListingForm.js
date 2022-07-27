import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ListingForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Listing form handler")


        axios.post("http://localhost:8000/api/product", {
            name,
            price,
            description,
            image
        })
        .then((response) => {
            console.log("success", response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    };

return (
    <div className="container">
        <div className="row">
            <div className= "col-6">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="text" className="form-control" onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input type= "text" id="name" className="form-control"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="price" className="form-label">
                            Price
                        </label>
                        <input type= "number" id="price" className="form-control"
                        onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div>
                    <p><label htmlFor="description" >Description:</label></p>
                    <textarea id="description" rows="5" column="100" onChange={(e) => 
                        setDescription(e.target.value)}></textarea>

                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    </div>



)

}

export default ListingForm;