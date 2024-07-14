import { FiShoppingCart } from "react-icons/fi";
import MainBody from "../Elements/Main-Body";
import { useContext, useState } from "react";
import { Cart } from "../../Context/CartContext";

const CartProducts = () => {
  const { items, setItems } = useContext(Cart);
  const [notification, setNotification] = useState("");

  const updateQuantity = (id, quantity) => {
    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      setNotification("Minimum quantity is 1.");
    } else {
      setNotification("");
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: parsedQuantity } : item
        )
      );
    }
  };

  const incrementQuantity = (id) => {
    setNotification("");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    if (items.find((item) => item.id === id).quantity === 1) {
      setNotification("Minimum quantity is 1.");
    } else {
      setNotification("");
    }
  };

  const removeFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <MainBody>
        <h1 className="text-4xl font-bold text-blue-700 mb-8 flex">
          <FiShoppingCart className="m-1 mr-4 size-10" color="Blue" />
          Cart List
        </h1>
        <div className="bg-white shadow-md rounded-lg p-2">
          {notification && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded mb-2">
              <span className="block sm:inline">{notification}</span>
            </div>
          )}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center text-blue-700 py-2">Product</th>
                <th className="text-center text-blue-700 py-2">Price</th>
                <th className="text-center text-blue-700 py-2">Quantity</th>
                <th className="text-center text-blue-700 py-2">Total</th>
                <th className="text-center text-blue-700 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 text-center">{item.name}</td>
                  <td className="text-center py-2 ">${item.price}</td>
                  <td className="text-center py-2 w-10">
                    <div className="flex justify-center border border-blue-600 rounded-md items-center">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="text-blue-700  ml-3"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                        className="w-14 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="1"
                      />
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="text-blue-700 mr-3 "
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center py-2">
                    ${item.price * item.quantity}
                  </td>
                  <td className="text-center py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <div className="flex">
              <h2 className="text-2xl font-bold text-blue-700">Total:</h2>
              <h2 className="text-black text-2xl ml-2 font-medium text-center ">
                Rp. {total}
              </h2>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      </MainBody>
    </div>
  );
};

export default CartProducts;
