import {getItem} from "../data";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/data"

export function ItemDetailContainer () {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([])
    const params = useParams()

/*     useEffect (() => {
        getItem(Number(params.id)).then((result) => {
        setItem(...result);
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))
    }, []); */

    useEffect (() => {

        const docRef = doc (db, "tiendaRopa", params.id);

        getDoc(docRef)
        .then((resp) => {
            setItem({...resp.data(), id: resp.id})
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    }, [])


    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemDetail
            id={item.id} 
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            />

        </main>
    )
}