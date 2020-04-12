import styled from 'styled-components'

export const Card = styled.div`
    position: absolute;
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 500px;
    background-color: var(--branco);
    box-shadow: 0px 0px 16px -7px rgba(0,0,0,0.75);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
        position: relative;
        top: 0;
        box-shadow: 0px 0px 16px -7px rgba(0,0,0,0);
    }
`
export const CardContent = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`