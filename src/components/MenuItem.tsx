// import type { MenuItem } from "../data/db";
import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = { item: MenuItem; dispatch: Dispatch<OrderActions> };

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    // <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-100 active:scale-95">
    <button
      className="border-2 border-sky-700 hover:bg-sky-500 w-full p-3 flex justify-between rounded-md shadow-xl  transform transition-transform duration-100 active:scale-95"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
