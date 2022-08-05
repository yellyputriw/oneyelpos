import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import TransactionItem, { ITransction } from "./TransactionItem";
import type ITransaction from "./TransactionItem";
import { RootState } from "../redux/store";

const TransactionList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // const handleReactToPrint = useReactToPrint({
  //   content: () =>
  // })

  // const handlePrint = () => {
  //   handleReactToPrint()
  // }

  return (
    <div>
      <ul>
        {cartItems.map((item: ITransction) => (
          <TransactionItem
            key={Math.random()}
            id={item.id}
            img={item.img}
            name={item.name}
            total={item.total}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
      {/* <button onClick={handlePrint}>Print</button> */}
    </div>
  );
};

export default TransactionList;
