import Carrito from "../assets/img/Carrito.png"
import "../Components/CartWidget.css" 

export const CartWidget = ({item}) => {
    return(
        <div>
            <img class="CarritoPng" src={Carrito} />
            <div>{item}</div>
             
        </div>
    )
}