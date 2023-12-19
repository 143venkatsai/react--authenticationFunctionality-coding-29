import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav-container">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/about" className="nav-link">
        About
      </Link>
    </li>
  </ul>
)

export default withRouter(Header)
