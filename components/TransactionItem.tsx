import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart-slice";
import Image from "next/image";

export interface ITransction {
  id: number;
  name: string;
  price: number;
  img: string;
  total: number;
  quantity: number;
}

const TransactionItem = (props: ITransction) => {
  const { id, name, price, img, total, quantity } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeFromCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div>
      <Image src={img} alt={name} width={100} height={100} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={addItemHandler}>+</button>
      <p>{quantity}</p>
      <button onClick={removeItemHandler}>-</button>
    </div>
  );
};

export default TransactionItem;
