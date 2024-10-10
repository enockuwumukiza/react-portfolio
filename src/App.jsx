import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
const { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } = lazy(() => import( './components'));
import { StarsCanvas } from './components'


import Loading from './loaders/Loading'


const App = () =>{
  return(
    <>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-hero bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
        <ToastContainer/>
      </BrowserRouter>
      </Suspense>
    </> 
  )
}

export default App
