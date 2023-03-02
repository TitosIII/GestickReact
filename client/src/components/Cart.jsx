import { useEffect, useState } from "react";
import "../../public/CSS/carrito.css";
import { createContext } from "react";
import { useContext } from "react";

const context = createContext(null);

///Lista de objetos
let codeCart = [];

const baseDeDatos = [
  {
    id: 1,
    name: "Patata",
    price: 2,
    img: "patata.jpg",
  },
  {
    id: 2,
    name: "Cebolla",
    price: 2.2,
    img: "cebolla.jpg",
  },
  {
    id: 3,
    name: "Calabacin",
    price: 2.2,
    img: "calabacin.jpg",
  },
  {
    id: 4,
    name: "Fresas",
    price: 0.6,
    img: "fresas.jpg",
  },
];

//////////////////elemento del state
function ProductElement({ name, exis, price }) {
  const renderSplicedCart = useContext(context);

  return (
    <>
      <li className="list-group-item text-right">
        {name} X {exis} - ${price}
        <button
          className="btn btn-danger"
          onClick={() => {
            renderSplicedCart(name);
          }}
        >
          X
        </button>
      </li>
    </>
  );
}

////////////////////////componente producto
function Producto({ id, name, img, price }) {
  const renderCart = useContext(context);

  return (
    <div className="cardCarrito col-sm-4">
      <div className="cardCarrito-body">
        <img className="img-fluid" src={img} />
        <h6 className="cardCarrito-title">{name}</h6>
        <p className="cardCarrito-text">${price}</p>
        <button
          className="btn btn-primary"
          key={id}
          onClick={() => {
            renderCart({ id, name, price });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

/////////////////////////pagina
function Cart() {
  const [carrito, setCarrito] = useState([]);

  const listProduct = [];

  function renderCart(obj) {
    carrito.splice(0, carrito.length);
    codeCart.push(obj);
    const cart = [...new Map(codeCart.map((v) => [v.id, v])).values()];
    var noExis;

    cart.forEach((item) => {
      noExis = 0;
      codeCart.forEach((prod) => {
        noExis += prod.id === item.id ? 1 : 0;
      });

      carrito.push(
        <ProductElement
          key={item.id}
          name={item.name}
          price={item.price}
          exis={noExis}
        />
      );
    });

    setCarrito([...carrito]);
  }

  function renderSplicedCart(name) {
    carrito.splice(0, carrito.length);
    codeCart = codeCart.filter(item => item.name === name? false : true)
    const cart = [...new Map(codeCart.map((v) => [v.id, v])).values()];
    var noExis;

    cart.forEach((item) => {
      noExis = 0;
      codeCart.forEach((prod) => {
        noExis += prod.id === item.id ? 1 : 0;
      });

      carrito.push(
        <ProductElement
          key={item.id}
          name={item.name}
          price={item.price}
          exis={noExis}
        />
      );
    });

    setCarrito([...carrito]);
  }

  function totalPrice(){
    var totalPrice = 0;
    carrito.forEach((item)=>{
      totalPrice += item.props.exis * item.props.price;
    });
    return totalPrice;
  };

  baseDeDatos.forEach((data) => {
    listProduct.push(
      <Producto
        key={data.id}
        id={data.id}
        name={data.name}
        price={data.price}
        img={data.img}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        <aside className="col-sm-4">
          <h2>Productos seleccionados</h2>

          <ul id="cart" className="list-group">
            <context.Provider value={renderSplicedCart}>
              {carrito}
            </context.Provider>
          </ul>

          <p className="text-right">
            Total: $<span id="total">{totalPrice()}</span>;
          </p>

          <button
            id="boton-vaciar"
            className="btn btn-danger"
            onClick={() => {
              codeCart.splice(0, codeCart.length);
              setCarrito([]);
            }}
          >
            Vaciar
          </button>
        </aside>

        <main id="items" className="col-sm-8 row">
          <context.Provider value={renderCart}>{listProduct}</context.Provider>
        </main>
      </div>
    </div>
  );
}

export default Cart;
