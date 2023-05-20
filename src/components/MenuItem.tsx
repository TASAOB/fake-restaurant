import React from "react";
import { Button } from "react-bootstrap";
import "./MenuItem.css";

interface MenuItemProps {
  item: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { title, description, price } = item;

  const handleAddToCart = () => {
    console.log("Item added to cart:", item);
    // Add your logic here to handle adding the item to the cart
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={title} />
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
      <Button className="button" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default MenuItem;
