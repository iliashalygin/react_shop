import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css"

const Catalog = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products"
    }).then(res => {
      console.log(res.data);
      setData(res.data)
    }).catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div className={s.products_container}>
      {data.map((product) => (
        <div key={product.id} className={s.card}>
          <div><img src={product.image} className={s.imgSlider} /></div>
          <div className={s.card_description}>
            <h6 className={s.titleSlider}>{product.title}</h6>
            <h6>{`Цена: ${product.price} $`}</h6>
            <h6>{`Категория: ${product.category}`}</h6>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Catalog