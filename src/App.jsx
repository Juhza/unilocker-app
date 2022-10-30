import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./context/UserContext"

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
