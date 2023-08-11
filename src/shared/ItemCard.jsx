import FormattedPrice from "../components/FormattedPrice";
import { useContext } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ItemCard = ({ item }) => {
  // code for remove item button to function

  const { deleteFromCart } = useShoppingCart();

  // set button up to remove one item at a time and not the whole quantity

  const handleRemove = () => {
    if (item.quantity === 0) {
      deleteFromCart(item.id);
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };

      deleteFromCart(updatedItem);
    }
  };

  return (
    <div className="card">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>
        price - <FormattedPrice value={item.price} />
      </p>
      <h2>Quantity {item.quantity}</h2>
      <button className="btn2 top-right" onClick={handleRemove}>
        Remove Item
      </button>
    </div>
  );
};

export default ItemCard;
