import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header>
        <ul className='navbar'>
          <li>
              <NavLink to={'/'}>
                Home
              </NavLink>
          </li>
          <li>
              <NavLink to={'/create'}>
                Publish a Job
              </NavLink>
          </li>
        </ul>
    </header>
  )
}

export default Header