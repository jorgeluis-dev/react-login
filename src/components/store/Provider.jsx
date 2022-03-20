import React, { Children } from 'react';
import { Context } from './Context';
import useStorage from 'utils/useStorage';

const StoreProvider = ({ children}) => {
    const [token, setToken] = useStorage('token');

    return(
        <Context.provider
        value={{
            token,
            setToken,
        }}
        >
            {children}
        </Context.provider>
    )

}


export default StoreProvider;