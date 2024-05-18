import { Dispatch, useCallback } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);
  const totalAmount = useCallback(
    () => subtotalAmount() + tipAmount(),
    [tip, order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals and Tip:</h2>
        <p className="">
          Subtotal to pay:{" "}
          <span className="font-bold"> {formatCurrency(subtotalAmount())}</span>
        </p>
        <p className="">
          Tip: <span className="font-bold"> {formatCurrency(tipAmount())}</span>
        </p>
        <p className="">
          Total to pay:{" "}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button
        className="w-full bg-sky-700 p-3 uppercase text-white font-bold mt-10 rounded-md shadow-xl transform transition-transform duration-100 active:scale-95 disabled:opacity-10 disabled:scale-100 "
        disabled={totalAmount() === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Save Order
      </button>
    </>
  );
};

export default OrderTotals;
