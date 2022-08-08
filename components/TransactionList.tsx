import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
import { RootState } from "../redux/store";
import { useRef } from "react";
import { Ref } from "react";

const TransactionList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const componentRef: Ref<any> = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  };

  return (
    <div>
      <div>
        <ComponentToPrint
          cart={cartItems}
          ref={componentRef}
          totalAmount={1000}
        />
      </div>
      {/* <ul>
        {cartItems.map((item: ITransction) => (
          <TransactionItem
            key={Math.random()}
            id={item.id}
            name={item.name}
            total={item.total}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul> */}
      <div className="mt-3">
        <div>
          <button className="btn btn-primary" onClick={handlePrint}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
