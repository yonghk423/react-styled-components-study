import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const ScrollToTop = () => {
    const [scrollState, setScrollState] = useState(false);
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    })
    
    const toTop = () => {
        window.scrollTo({ top: 0 });
    }
    
    return (
        <ToTop
        onClick={toTop} 
        scrollState={scrollState}
        >
            <img src={logo} alt='' />
        </ToTop>
    )
}

export default ScrollToTop;

const ToTop = styled.div`
    display: ${({ scrollState }) => (scrollState ? "block" : "none")};
    position: fixed;
    cursor: pointer;
    z-index: 10;
    bottom: 1rem;
    right: 2rem;
    img {
        height: 1.5rem;
    }
    border-radius: 2rem;
    background-color:  #1900ff39;
    padding: 1rem;
`;