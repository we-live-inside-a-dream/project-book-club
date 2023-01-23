import React, { Children } from 'react'

function MustBeLoggedIn() {
    const authContext = useContext(AuthenticationContext)
  return authContext.username ? Children : null
}

export default MustBeLoggedIn