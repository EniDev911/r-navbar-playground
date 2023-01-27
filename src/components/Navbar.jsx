import {useAppContext} from '../context/AppCtx'
import {NavLink} from 'react-router-dom'

export default () => {

  const setActive = ({ isActive}) => (isActive ? "active": "") 
  const {options} = useAppContext();
  return (
    <nav>
      <ul className='nav'>
      {options.map(opt => {
        return (
          <li key={opt.title} className='nav-item ms-3 text-light'>
            <NavLink to={opt.path} className={setActive}>
              {opt.title}
            </NavLink>
          </li>
        )
      })} 
      </ul>     
    </nav>
  );
};
