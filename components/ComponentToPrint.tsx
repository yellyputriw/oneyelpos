// import React from "react";

// export const ComponentToPrint = React.forwardRef((props, ref) => {
//   const { cart, totalAmount } = props;
//   return (
//     <div ref={ref} className="p-5">
//       <table className="table">
//         <thead>
//           <tr>
//             <td>#</td>
//             <td>Name</td>
//             <td>Price</td>
//             <td>Qty</td>
//             <td>Total</td>
//           </tr>
//         </thead>
//         <tbody>
//           {cart
//             ? cart.map((cartProduct, key) => (
//                 <tr key={key}>
//                   <td>{cartProduct.id}</td>
//                   <td>{cartProduct.name}</td>
//                   <td>{cartProduct.price}</td>
//                   <td>{cartProduct.quantity}</td>
//                   <td>{cartProduct.totalAmount}</td>
//                 </tr>
//               ))
//             : ""}
//         </tbody>
//       </table>
//       <h2 className="px-2">Total Amount: ${totalAmount}</h2>
//     </div>
//   );
// });

// export default ComponentToPrint;

import React, { forwardRef, Ref } from "react";

interface IPrint {
  cart: [];
  totalAmount: number;
}

interface Cart {
  id: string;
  name: string;
  price: string;
  quantity: string;
  total: string;
}

// eslint-disable-next-line react/display-name
const ComponentToPrint = forwardRef(
  ({ cart, totalAmount }: IPrint, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className="w-full">
        <div>Logo Toko</div>
        <table className="table-auto border">
          <thead className="border">
            <tr className="font-bold text-base">
              <th className="w-4 border">Name</th>
              <th className="w-4 text-center">Price</th>
              <th className="w-4 text-center">Qty</th>
              <th className="w-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart
              ? cart.map((cartProduct: Cart, key) => (
                  <tr key={key}>
                    <td className="border px-4">{cartProduct.name}</td>
                    <td className="text-center">{cartProduct.price}</td>
                    <td className="text-center">{cartProduct.quantity}</td>
                    <td>{cartProduct.total}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <h2 className="px-2">Total Amount: ${totalAmount}</h2>
      </div>
    );
  }
);
export default ComponentToPrint;
