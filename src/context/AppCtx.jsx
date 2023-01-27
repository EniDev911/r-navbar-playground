import React, {createContext, useContext, useEffect, useState} from 'react';

const AppCtx = createContext({})

// hook
export function useAppContext(){
    return useContext(AppCtx);
}


const AppProvider = ({children}) => {
    const [options, setOptions] = useState([{title:'home', path:'/'}, {title:'home', path:'about'}]);

    return (
        <AppCtx.Provider value={{
            options,
            setOptions
        }}>
            {children}
        </AppCtx.Provider>
    )
}

export default AppProvider