import { useState, useEffect} from "react";
import axios from "axios";



const DisplayAll = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((allProducts) => {
        console.log(allProducts.data);
        setProducts(allProducts.data);
        })
        .catch((err) => console.log(err.response));
    }, []);





    return <h2>Display All</h2>;
};

export default DisplayAll;