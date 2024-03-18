import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Content, Container } from './LayoutStyled'


const Layout = ({children}) => {
  return (
    <Container>
        <Navbar />
        <Content>{children}</Content>
    </Container>
  )
}

export default Layout
