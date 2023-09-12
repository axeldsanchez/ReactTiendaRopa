import { useEffect, useState } from "react";
import {getData} from "../data";
import {ItemList} from "../Components/ItemList";
import {getItemCategory} from "../data";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data"



export function ItemListContainer () {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])
    const cat = useParams()

/*     useEffect (() => {

        const asyncFunc = cat.id ? getItemCategory : getData

        asyncFunc(cat.id).then((result) => {
        setProducts(result);
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))
    }, [cat]); */

    useEffect(() => {

        const productosRef = collection(db, "tiendaRopa");
        const p = cat.id === undefined ? productosRef : query(productosRef, where("category", "==", cat.id))

        getDocs(p)
        .then((resp) => {
            
            setProducts(
                resp.docs.map((doc) => {
                    return {...doc.data(), id : doc.id}
                })
            )

        }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    }, [cat])


    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemList productosFetch={products}/>

        </main>
    )
}