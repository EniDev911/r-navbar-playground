import {useAppContext} from '../context/AppCtx'

export default () => {

  const {setOptions} = useAppContext();


  const handleOnclick = (e) => {
    const newOption = {
        title: nombre,
        path: correo
      };
    setOptions([...options, newOption]);
    }; 
  }

  return (
    <div className="container">
      <h2>Welcome</h2>
      <h1>💻 React Navbar Playground 💻</h1>

      <div className="row mt-5 justify-content-between">
        <div className="col-12 col-sm-4">
          <label className="mb-1">Agregar opción</label>
          <input className="form-control mb-1" placeholder="Titulo" onChange={}/>
          <input className="form-control" placeholder="Ruta" />
          <button className="btn btn-dark mt-2">agregar</button>
        </div>

        <div className="col-12 col-sm-4 ">
          <label>Estilos</label>
          <input className="form-control" placeholder="Color de Fondo" />
          <input className="form-control" placeholder="Color de texto" />
        </div>
      </div>
    </div>
  );
};
