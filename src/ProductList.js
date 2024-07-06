import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductList(props) {
  var [productList,setProduct]=useState([])
  useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(product=>{
  // productList=product.data
  setProduct(product.data)
  console.log("data",productList)
})

  })

    return (
        <div>
            {

                productList.map(product=>{

                    return <div class="product card" >
                    <img src={product.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="card-text">{product.price}</p>
                      {/* <a href="#" class="btn btn-primary">{product.rating}</a> */}
                    </div>
                  </div>
                })
            }
        </div>
    );
}

export default ProductList;