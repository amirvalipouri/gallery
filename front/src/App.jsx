import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((s) => s.isLogged);
  const role = useSelector((s) => s.role);
  const elements = useRoutes(routes(isLogged, role));

  return (
    <>
    {elements}
    <Toaster/>
    </>
  )
}

export default App
