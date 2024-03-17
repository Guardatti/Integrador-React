import React, { useState } from 'react'
import { ContainerLinks, ContainerNavbar, LogoLink, MenuIcon, Links, ContainerUserCart, User, Cart, ContainerDropdownMenu, DropdownMenu, LinksDropDown, CointainerDivProducts, ArrowDown } from './NavbarStyled';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
    const toggleDropDownMenu = () => {
      setIsDropdownMenuOpen(!isDropdownMenuOpen)
    }

  return (
    <ContainerNavbar>
      <MenuIcon onClick={toggleMenu}/>
      <LogoLink to='/'>BearX</LogoLink>
      <ContainerLinks isMenuOpen={isMenuOpen}>
        <Links to='/'>Home</Links>
        <Links to='/aboutus'>About us</Links>
        <ContainerDropdownMenu>
          <CointainerDivProducts onClick={toggleDropDownMenu}>Products <ArrowDown /></CointainerDivProducts>
          <DropdownMenu isDropdownMenuOpen={isDropdownMenuOpen}>
            <LinksDropDown to='/peripherals'>Peripherals</LinksDropDown>
            <LinksDropDown to='/components'>Components</LinksDropDown>
            <LinksDropDown to='/consoles'>Consoles</LinksDropDown>
            <LinksDropDown to='/gamingchairs'>Gaming Chairs</LinksDropDown>
            <LinksDropDown to='/tablets'>Tablets</LinksDropDown>
            <LinksDropDown to='/applestore'>Apple Store</LinksDropDown>
            <LinksDropDown to='/connectivityandnetworks'>Connectivity And Networks</LinksDropDown>
          </DropdownMenu>
        </ContainerDropdownMenu>
        <Links to='/contactus'>Contact us</Links>
      </ContainerLinks>
      <ContainerUserCart>
        <User />
        <Cart />
      </ContainerUserCart>
    </ContainerNavbar>
  )
}

export default Navbar
