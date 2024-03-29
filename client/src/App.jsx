import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Resignup from './Resignup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Relogin from './Relogin';

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <BrowserRouter>
 <Routes>
  <Route path='/register' element={<Resignup />} />
  <Route path='/login' element={<Relogin />} />

</Routes>

  </BrowserRouter>

  )
}

export default App