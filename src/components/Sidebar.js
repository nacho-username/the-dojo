import { NavLink } from 'react-router-dom'

// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* {avatar of user} */}
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard Icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="create Icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}