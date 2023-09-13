import { Item } from "./Item"

export function ItemList({ productosFetch }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-aroud flex-wrap">
        {productosFetch.map((producto) => (
          <Item key={producto.id} 
          id={producto.id} 
          name={producto.name} 
          description={producto.description} 
          price={producto.price} 
          imagen={producto.imagen}/>
        ))}
      </div>
    </div>
  );
}