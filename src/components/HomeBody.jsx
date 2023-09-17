import React from 'react'
import { useEffect, useState } from 'react'
import App from '../App.css'

const HomeBody = () => {

  const [data, setData] = useState([])

  const callApi = () => {

    console.log("callApi")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    callApi();
  }, [])

  return (
    <>
    <h1 className='HeadingMain'>Products</h1>
      {data.map((products) => {
        console.log(products)
        return (
          <div className='cards'>
      <div className='card' key={products.id}>
        <img src={products.image} alt="" />
        <p>{products.title}</p>
        <h1>Price : {products.price}</h1>
        <button>Add to Cart</button>
      </div>
    </div>
        )

      })}
    </>

  );
}

export default HomeBody
