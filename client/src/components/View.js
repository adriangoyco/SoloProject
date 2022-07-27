import axios from "axios";
import { useEffect, useState } from "react";


const View = (props) => {
    console.log(props);
    const [productData, setProductData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then((response) => {
            console.log(response.data);
            setProductData(response.data);
        })
        .catch((err) => console.log(err.response));
    }, []);




    return (
        <div className="container">
            <h1>hi</h1>
        </div>

    );
};

export default View;