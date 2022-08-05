import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart-slice";

interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
}

const ProductItem = ({ id, img, name, price }: IProduct) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        img,
        price,
        name,
      })
    );
  };

  return (
    <li>
      <Image src={img} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={addToCartHandler}>Tambah</button>
    </li>
  );
};

export default ProductItem;
