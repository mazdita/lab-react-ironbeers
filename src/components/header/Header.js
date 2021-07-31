import { Link } from "react-router-dom";

function Header (){
   return(
      <nav >
          <div>
              <Link exact to="/">
              <h1><i className="fas fa-home"></i></h1>
              </Link>
          </div>
      </nav>
   )
}
export default Header;