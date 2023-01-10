import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css"
import search from "../slider/img/search.png"

const Catalog = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products"
    }).then(res => {
      setData(res.data)
    })
  }, [])

  const [value, setValue] = useState('')
  const searchCatalog = data.filter(product => {
    return product.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div>
      <div className={s.form}>
        <form className={s.search__form} >
          <input
            type="text"
            placeholder="Поиск"
            className={s.search__input}
            onChange={(event) => setValue(event.target.value)}
          />
          <img src={search} className={s.search__img} />
        </form>
      </div>
      <div className={s.products_container}>
        {searchCatalog.map((product) => (
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
    </div>
  )
}
export default Catalog