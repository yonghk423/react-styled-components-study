import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/main.png'
const Main = () => {
    return (
        <Section>
            <div className='background'>
                <img src={homeImage} alt='' />
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                        natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
                        tenetur!    
                    </p>                   
                </div>
                <div className='search'>
                    <div className="container">
                        <label htmlFor="">Where you want to go</label>
                        <input type="text" placeholder="Search Your location" />
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-in</label>
                        <input type='date'/>
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-Out</label>
                        <input type='date'/>
                    </div>
                    <button>Explore Now</button>
                </div>               
            </div>
        </Section>
    )
}

export default Main;

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    .background {
        img {
            width: 100%;
            filter: brightness(60%);
        }
    }
`;