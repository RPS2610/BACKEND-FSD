import { useState, useEffect } from "react";

const App = () => {
  const[products,setProducts]=useState([]);
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");

  //get products
  const getProducts=async()=>{
    const response=await fetch("http://localhost:5000/api/products")

    const data=await response.json();
    setProducts(data);
  }


  //add products
  const addProduct=async(e)=>{
    e.preventDefault();
    const product={
      name: name,
      price: price,
      category: category

    };

    await fetch("http://localhost:5000/api/products",{
        method:"POST",
        headers:{
        "content-type":"application/json"
        },
        body:json.stringify(product)
    })
  }
  return (
    <div>
      App
      </div>
  )
}

export default App