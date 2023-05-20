import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MenuItem from "./MenuItem";
import "./Menu.css";

const Menu: React.FC = () => {
  const menus = [
    {
      title: "Appetizers",
      items: [
        { name: "Bruschetta", price: 8.99 },
        { name: "Calamari", price: 12.99 },
        { name: "Caprese Salad", price: 9.99 },
      ],
    },
    {
      title: "Main Course",
      items: [
        { name: "Grilled Salmon", price: 18.99 },
        { name: "Pasta Carbonara", price: 15.99 },
        { name: "Chicken Parmesan", price: 16.99 },
      ],
    },
    // Add more menu categories and items here
  ];

  return (
    <section>
      <h2>Menu</h2>
      <div className="menu-container">
        {menus.map((menu, index) => (
          <Card key={index}>
            <Card.Header>{menu.title}</Card.Header>
            <Card.Body>
              <Row>
                {menu.items.map((item, index) => (
                  <Col sm={6} key={index}>
                    <MenuItem name={item.name} price={item.price} />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Menu;
