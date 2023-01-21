import React from 'react'
import AuthenticationContext from './AuthenticationContext'

const AuthenticationProvider = ({children}) => {
    return (
        <AuthenticationContext.Provider value={authContext}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider