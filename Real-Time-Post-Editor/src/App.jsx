import './app.scss';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white bg-opacity-50'>
      <div className='w-full block'>
        <div className="header">
        <Header />

        </div>
        <main>
          <div className="beech">

          <Outlet />
          </div>
        </main>
        <div className="footer">
        <Footer />

        </div>
      </div>
    </div>
  ) : null
}

export default App
