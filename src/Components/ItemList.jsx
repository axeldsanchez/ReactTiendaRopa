import {Item} from "./Item"

export function ItemList ({ productosFetch }) {
    return (
        <div className="container">
          <div className="d-flex justify-content-aroud flex-wrap">
            {productosFetch.map((producto) => (
              <Item key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      );
}