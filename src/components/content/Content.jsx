import React from "react";
import NewProducts from "./new_products/NewProducts";
import Section_top from "./section_top/Section";

const Content = (props) => {
  return (
    <div>
      <Section_top />
      <NewProducts />
    </div>
  )
}

export default Content