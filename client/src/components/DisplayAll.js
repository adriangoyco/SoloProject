import { useEffect, useState} from "react";
import axios from "axios";
import {Link,} from "react-router-dom";



const DisplayAll = () => {
    const [products, setProducts] = useState([]);
    const [triggerRequest, setTriggerRequest] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        })
        .catch((err) => console.log(err.response));
    }, [triggerRequest]);

const handleDelete = (idFromBelow) => {
  axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
    .then((response) => {console.log(response);
      setTriggerRequest(!triggerRequest);
    })
    .catch((err) => console.log(err));
};



    return (
      
      
<table style={{textAlign: 'center'}}>
  <thead>
    <tr style={{border: '1px solid'}}>
      <th>Image</th>
      <th>Product Name</th>
      <th style={{padding: '30px'}}>Description</th>
      <th>Price</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
{products && products.map((element) =>{
    return (
        <tr>
            <td><img src={element.image} alt="" style={{ height: "160px" }}/></td>
            <td>{element.name}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>
                <Link to={`/product/${element._id}`}>View</Link>
                <Link to={`/edit/${element._id}`}>Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(element._id)}>Remove</button>
            </td>
        </tr>
    )
})}
  </tbody>
</table>

    );


};

export default DisplayAll;