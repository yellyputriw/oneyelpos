import { productData } from "../utils/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <section id="product" className="px-4 my-8">
      <div className="grid grid-cols-3 gap-6">
        {productData.map((data) => (
          <ProductItem
            id={data.id}
            key={data.id}
            img={data.img}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
