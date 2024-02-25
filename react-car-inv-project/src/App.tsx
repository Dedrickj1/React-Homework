import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
      { routes.map((route: any, index: any) =>(
        <Route
        key={index}
        path={ route.path}
        element={
          <route.component />
        }
        />
      )) }
    </Routes>
    </BrowserRouter>
  )
}

export default App
