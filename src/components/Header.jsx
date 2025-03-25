import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="nav navbar-nav"> 
                    <NavLink className="nav-item nav-link" to={'/'}>
                      Home
                    </NavLink>
                    {/* <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li> */}
              </div>
            </nav>
        </header>
    )
}