import {getItem} from "../data";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer () {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([])
    const params = useParams()
    console.log(params);

    useEffect (() => {
        getItem(Number(params.id)).then((result) => { console.log(result);
        setItem(...result);
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))
    }, []);

    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemDetail 
            name={item.name}
            description={item.description}
            price={item.price}/>

        </main>
    )
}