import React, { createContext, useState } from 'react'

export const SeletedPollContext = createContext()

const SeletedPollProvider = ({children}) => {
    const [seletedPoll,setSelectedPoll] = useState(null)
    
  return (
    <div>
      <SeletedPollContext.Provider value={{seletedPoll,setSelectedPoll}}>
        {children}
      </SeletedPollContext.Provider>
    </div>
  )
}

export default SeletedPollProvider
