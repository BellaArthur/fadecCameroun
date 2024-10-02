import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter as Router,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Layout from './layout/Layout';
import ErrorPage from './pages/error-page';
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Aproppos from './pages/Aproppos';
import Partenariats from './pages/Partenariats'
import Programmes from './pages/Programmes'
import Autonomisation from './pages/Automisation'
import Education from './pages/Education'
import Sensibilisation from './pages/Sensibilisation';

const router = Router (
  createRoutesFromElements ((
    <Route path='/' errorElement={< ErrorPage />} element={<Layout/>} > 
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/a-propos' element={<Aproppos />} />
      <Route path='/partenariats' element={<Partenariats />} />
      <Route path='/programmes' element={<Programmes />} />
      <Route path='/programmes/autonomisation-des-femmes-en-milieu-rural' element={<Autonomisation />} />
      <Route path='/programmes/aide-a-l-edcation-pour-les-plus-défvorisés' element={<Education />} />
      <Route path='/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille' element={<Sensibilisation />} />

      
    </Route>
  )) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
