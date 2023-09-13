import { useContext } from "react"
import Carrito from "../assets/img/Carrito.png"
import "../Components/CartWidget.css"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" style={{ display: totalQuantity() > 0 ? "block" : "none" }}>
            <img class="CarritoPng" src={Carrito} />
            {totalQuantity()}
        </Link>
    )
}