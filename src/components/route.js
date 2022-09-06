import {Routes, Route} 
from 'react-router-dom';

import { Login } 
from './login';

import { AddEmp } 
from './addEmp';

  const routes = (
      <Routes>
         <Route path = "/" element={<Login/>}/>
         <Route path = "/addEmp" element={<AddEmp/>}/>
      </Routes>
  )

export default routes