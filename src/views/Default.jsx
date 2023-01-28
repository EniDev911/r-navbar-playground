import { useAppContext } from "../context/AppCtx";

import { useParams } from "react-router-dom";

export default () => {
  const {options} = useAppContext()
  const params = useParams();
  return (
    <>
      <h1>
        Estas en la ruta: <b>{options.find(opt => opt.path === params['*']).path}</b>
      </h1>
    </>
  );
};
