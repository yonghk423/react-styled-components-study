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
    display: flex;
    justify-content: space-evenly;
    background-color: #d0d8ff;
    border-radius: 0.5rem;
    padding: 2.5rem;

    ul {
        display: flex;
        list-style-type: none;
        gap: 2rem;
        li {
            a {
                text-decoration: none;
                color: black;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #302ce9;
                }
            }
            svg {
                font-size: 1.3rem;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #302ce9;
                }
            }
        }
    }
`;