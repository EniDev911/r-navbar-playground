import {useAppContext} from '../context/AppCtx'

export default () => {
  const {options} = useAppContext();
  return (
    <nav>
      <ul className='nav'>
      {options.map(opt => {
        return (
          <li key={opt} className='nav-item ms-3'>{opt}</li>
        )
      })} 
      </ul>     
    </nav>
  );
};
