import "../Components/NavBar.css"
import { CartWidget } from "./CartWidget"
import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"

export function Nav() {
    return (
        <nav className="NavBar">
            <nav id="Barra" class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to={"/"} >
                    {/* <a class="navbar-brand" href="#"> */}<img class="LogoPng" src={Logo} />{/* </a> */}
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Remeras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pantalones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Camisas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sweaters</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div> <CartWidget item={10}/></div>
            </nav>
        </nav>
    );
};