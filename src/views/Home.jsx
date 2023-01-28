import {useAppContext} from '../context/AppCtx'
import { useState } from 'react';

export default () => {

  const {setOptions, options, setStyle, style} = useAppContext();
  const [option, setOption] = useState({});

  const handleOnchange = (e, property) => {
    setOption({...option, [property]: e.target.value})
    setStyle({...style, [property]: e.target.value})
  }

  const handleOnclick = () => {
    setOptions([...options, option]);
    setOption({path: '', title:''})
  }

  return (
    <div className="container">
      <h2>Welcome</h2>
      <h1>💻 React Navbar Playground 💻</h1>

      <div className="row mt-5 justify-content-between">
        <div className="col-12 col-sm-4">
          <label className="mb-1">Agregar opción</label>
          <input className="form-control mb-1" value={option.title} placeholder="Titulo" onChange={(e) => handleOnchange(e, 'title')}/>
          <input className="form-control" value={option.path} placeholder="Ruta" onChange={(e) => handleOnchange(e, 'path')}/>
          <button className="btn btn-dark mt-2" onClick={handleOnclick}>agregar</button>
        </div>
        <div className="col-12 col-sm-4 ">
          <label>Estilos</label>
          <input className="form-control" placeholder="Color de Fondo" onChange={(e) => handleOnchange(e, 'background')} />
          <input className="form-control" placeholder="Color de texto" onChange={(e) => handleOnchange(e, 'color')}/>
        </div>
      </div>
    </div>
  );
};
