import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PollContextProvider from "../src/context/PollContext.jsx"
import SeletedPollProvider from "../src/context/SeletedPoll.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SeletedPollProvider>
    <PollContextProvider>
      <App/>
      </PollContextProvider>
    </SeletedPollProvider>
    </BrowserRouter>
  </StrictMode>,
)