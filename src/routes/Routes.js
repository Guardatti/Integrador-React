import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Peripherals from '../pages/Peripherals/Peripherals'
import ComponentsPC from '../pages/ComponentsPC/ComponentsPC'
import Consoles from '../pages/Consoles/Consoles'
import GamingChairs from '../pages/GamingChairs/GamingChairs'
import Tablets from '../pages/Tablets/Tablets'
import AppleStore from '../pages/AppleStore/AppleStore'
import ConnectivityAndNetworks from '../pages/ConnectivityAndNetworks/ConnectivityAndNetworks'
import ContactUs from '../pages/ContactUs/ContactUs'
import Layout from '../components/Layout/Layout'



const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='peripherals' element={<Peripherals />} />
          <Route path='components' element={<ComponentsPC />} />
          <Route path='consoles' element={<Consoles />} />
          <Route path='gamingchair' element={<GamingChairs />} />
          <Route path='tablets' element={<Tablets />} />
          <Route path='applestore' element={<AppleStore />} />
          <Route path='connectivityandnetworks' element={<ConnectivityAndNetworks />} />
          <Route path='contactus' element={<ContactUs />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
