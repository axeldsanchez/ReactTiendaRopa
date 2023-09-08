import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h2>No hay items en el Carrito</h2>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    console.log(totalQuantity);


    return (
        <>
            <div>
                {cart.map(p =>
                    <div className="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">{p.name}</h5>
                            <p class="card-text">{p.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Precio: ${p.price}</li>
                            <li class="list-group-item">Cantidad: {p.quantity}</li>
                            <li class="list-group-item">Total: ${p.quantity * p.price}</li>
                        </ul>
                    </div>)}
            </div>

            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout"><button>Checkout</button></Link>
        </>
    )
}