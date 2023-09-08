import { Link } from "react-router-dom";

export const Item = ({ name, description, price, id}) => {
    return(
        
      <div className="card" style={{ width: '18rem' }}>
   {/*      <img src="..." class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{price}</li>
          <Link to={`/item/${id}`}>
          <li class="list-group-item"> <button>Detalle</button></li>
          </Link>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    )
}; 