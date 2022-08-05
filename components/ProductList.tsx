import { productData } from "../utils/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      <ul>
        {productData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
