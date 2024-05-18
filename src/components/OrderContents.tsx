import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumption</h2>
      <div className="space-y-3 mt-10">
        {
          // <p className="text-center">La orden tiene algo</p>
          order.map((item) => (
            <div
              className="flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name}: {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - Sub-total:{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="bg-red-800 h-8 w-8 rounded-full text-white font-black shadow-xl transform transition-transform duration-100 active:scale-95 disabled:opacity-10 disabled:scale-100 "
                onClick={() =>
                  dispatch({ type: "remove-item", payload: { id: item.id } })
                }
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OrderContents;
