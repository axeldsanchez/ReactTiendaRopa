import React, { useContext, useState } from 'react'
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/data"

export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { cart, clearCart, total } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total()
        }

        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido).then((doc) => {
            setPedidoId(doc.id);
            clearCart()
        })
    }

    if (pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}
