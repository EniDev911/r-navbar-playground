import {useAppContext} from '../context/AppCtx'
import {NavLink} from 'react-router-dom'

export default () => {

  const setActive = ({ isActive}) => (isActive ? "active": "") 
  const {options, style} = useAppContext();
  return (
    <nav style={{background: style.background}}>
      <ul className='nav'>
      {options.map(opt => {
        return (
          <li key={opt.title} className='nav-item ms-3'>
            <NavLink to={opt.path} className={setActive} style={{color: style.color}}>
              {opt.title}
            </NavLink>
          </li>
        )
      })} 
      </ul>     
    </nav>
  );
};
