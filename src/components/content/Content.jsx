import s from "./Content.module.css";
import NewProducts from "./new_products/NewProducts";
import Section_top from "./section_top/Section";

const Content = () => {
  return (
    <div className={`${s.content}`}>
      <Section_top />
      <NewProducts />
    </div>
  )
}

export default Content