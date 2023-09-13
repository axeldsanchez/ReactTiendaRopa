import { Link } from "react-router-dom";

export const Item = ({ name, description, price, id, imagen }) => {
  return (
    <div style={{padding: "0.5rem"}}>
    <div className="card" style={{ width: '18rem'}}>
      <img src={imagen} style={{ height: '19rem' }} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Precio: ${price}</li>
        <Link to={`/item/${id}`}>
          <li class="list-group-item" style={{ textAlign: "center" }}> <button>Detalle</button></li>
        </Link>
      </ul>
    </div>
    </div>
  )
}; 