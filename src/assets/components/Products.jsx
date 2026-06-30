import { Component } from "react";

const products = [
  {
    id: 1,
    prodName: "Mouse",
    price: 25,
  },
  {
    id: 2,
    prodName: "Keyboard",
    price: 90,
  },
  {
    id: 3,
    prodName: "Monitor",
    price: 120,
  },
  {
    id: 4,
    prodName: "Numeric Keyboard",
    price: 40,
  },
];

class Products extends Component {
  render() {
    return (
      <ul>
        {products
          .filter((product) => product.price > 50)
          .map((prod) => (
            <li key={prod.id}>
              Prodotto: {prod.prodName}, prezzo: {prod.price}
            </li>
          ))}
      </ul>
    );
  }
}

export default Products;
