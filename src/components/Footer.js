import React from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterContainer>
            <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
            <ul className='links'>
                <li>
                    <a href="#Main">Home</a>
                </li>
                <li>
                    <a href="#services">About</a>
                </li>
                <li>
                    <a href="#recommend">Place</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
            </ul>
            <ul>
                <li>
                    <BsFacebook />
                </li>
                <li>
                    <AiFillInstagram />
                </li>
                <li>
                    <BsLinkedin />
                </li>
            </ul>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
`;