import React, { createContext, useState } from 'react';

const SwitchStatusContext = createContext({ on: true })

const SwitchStatusContextProvider = ({ children }) => {
  

  return <SwitchStatusContext.Provider value={{
    state,
    toggle
  }}>
    {children}
  </SwitchStatusContext.Provider>
}

export { SwitchStatusContext }