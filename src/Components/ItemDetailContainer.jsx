import {getItem} from "../data";
import { useEffect, useState } from "react";

export function ItemDetailContainer () {

    const [isLoading, setIsLoading] = useState(true);
    /* const [products, setProducts] = useState([]) */

    useEffect (() => {
        getItem(1).then((result) => { console.log(result);
        /* setProducts(data); */
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))
    }, []);

    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

     {/*        <ItemList productosFetch={products}/> */}

        </main>
    )
}