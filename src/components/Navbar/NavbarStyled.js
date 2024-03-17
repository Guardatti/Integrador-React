import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export const ContainerNavbar = styled.div`
    width: 100%;
    height: 80px;
    background-color: #011235;
    border-bottom: 1px solid #FFFFFF;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`

export const MenuIcon = styled(FiMenu)`
    font-size: 24px;
    cursor: pointer;
    display: none;
    color: #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        display: flex;
        margin-left: 1rem;
    }
`

export const LogoLink = styled(Link)`
    font-family: 'Allerta Stencil';
    font-size: 52px;
    margin-left: 2rem;
    color: #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        margin-left: 1rem;
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 991px){
        gap: 0px;
        position: absolute;
        top: 100%;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: start;
        background-color: #011235;
        transition: all 0.5s ease;
        overflow-y: auto;
        border-top: 1px solid white;
        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #FFFFFF;
            border-radius: 10px;
        }
        transform: ${({isMenuOpen}) => isMenuOpen ? 'translateX(-150%)' : 'translateX(0%)'};
    }
`

export const Links = styled(Link)`
    color: #FFFFFF;
    font-size: 17px;
    padding: 10px;
    @media (min-width: 320px) and (max-width: 991px){
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid #FFFFFF;
    }
`
export const ContainerDropdownMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
    }
`

export const CointainerDivProducts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    padding: 10px;
    color: #FFFFFF;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
        border-bottom: 1px solid #FFFFFF;
        padding: 10px;
    }
`

export const DropdownMenu = styled.div`
    display: ${({isDropdownMenuOpen}) => isDropdownMenuOpen ? 'none' : 'flex'};
    transition: all 0.5s ease;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 100%;
    border-top: 1px solid #FFFFFF;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        display: ${({isDropdownMenuOpen}) => isDropdownMenuOpen ? 'none' : 'flex'};
        position: relative;
        width: 100%;
        top: 0%;
        border: none;
    }
`

export const LinksDropDown = styled(Link)`
    font-size: 15px;
    color: #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    width: 100%;
    text-align: left;
    padding: 10px;
    background-color: #011235;
    @media (min-width: 320px) and (max-width: 991px){
        padding-left: 30px;
    }
`

export const ContainerUserCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-right: 2rem;
    @media (min-width: 320px) and (max-width: 991px){
        margin-right: 1rem;
    }
`

export const User = styled(FaUser)`
    font-size: 18px;
    cursor: pointer;
    color: #FFFFFF;
`

export const Cart = styled(FaShoppingCart)`
    font-size: 18px;
    cursor: pointer;
    color: #FFFFFF;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
    font-size: 18px;
    color: #FFFFFF;
`