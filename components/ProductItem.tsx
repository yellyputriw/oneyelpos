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
    <div key={id} className="border rounded-md shadow-lg">
      <Image src={img} alt={name} width={200} height={200} />
      <div className="px-4 py-2 flex justify-between items-center">
        <div>
          <h3 className="mb-1 text-xl font-medium">{name}</h3>
          <p className="mb-1 text-red-600 font-semibold">¥{price}</p>
        </div>
        <div>
          <button
            onClick={addToCartHandler}
            className="mb-1 px-2 py-1 bg-orange-600 text-white rounded-lg text-end">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
