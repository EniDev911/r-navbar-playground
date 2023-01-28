import React, {createContext, useContext, useEffect, useState} from 'react';

const AppCtx = createContext({})

// hook
export function useAppContext(){
    return useContext(AppCtx);
}

const AppProvider = ({children}) => {
    const [options, setOptions] = useState([{title:'home', path:'/'}]);
    const [style, setStyle] = useState({color:'#fff', background:'#000'});

    return (
        <AppCtx.Provider value={{
            options,
            setOptions,
            style,
            setStyle
        }}>
            {children}
        </AppCtx.Provider>
    )
}

export default AppProvider