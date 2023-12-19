import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogoutButton = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <div className="logout-container">
        <button
          className="logout-button"
          type="button"
          onClick={onLogoutButton}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default withRouter(LogoutButton)
