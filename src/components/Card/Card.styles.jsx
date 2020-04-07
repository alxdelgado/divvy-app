import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: #D6D6D6; 
    width: 100%; 
    max-width: 280px; 
    height: 100%; 
    max-height: 400px; 
    margin-top: 2.5rem;
    margin-left: 10rem;
    barder-radius: 20px;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.16);

    @media only screen and (min-width: 600px) {
        max-width: 472px; 
        max-height: 246px;
    }
`;

export const Card_Grid = styled.div`
    display: grid; 
    grid-template-columns: repeat(0, 200px 1fr);
    flex-direction: column;

    
`; 