import styled from 'styled-components';

export const ArrowWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr, 44px; 
`;

export const ArrowAnimation = styled(Link)`
    --active: #fff;
    --border: rgba(255, 255, 255, .12);
    display: block; 
    position: relative; 
    width: 44px; 
    height: 44px;
    &.left {
        transform: scaleX(-1); 
    }


`; 