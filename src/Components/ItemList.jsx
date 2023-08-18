import {Item} from "./Item"

export const ItemList = ({ products }) => {
    return (
    <div>
        {products.map(item => (
            <Item key={item.id} id={item.id} description={item.description} price={item.price} name={item.name} />
        ))}
    </div>

    );
}; 