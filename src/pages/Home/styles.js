import styled from 'styled-components'

export const Logo = styled.img`
    width: 288px;
    height: auto;
    margin-top: -35px;

    @media (max-width: 820px) {
        width: 90%;
        max-width: 280px;
        height: auto;
        margin: -67px 0 19px 0;
    }
`

export const Form = styled.div`
    position: relative;
    border-radius: 100px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 353px;
    -webkit-box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 13px -6px rgba(0,0,0,0.75);

    @media (max-width: 820px) {
        
    }
`


export const Input = styled.input`
    width: calc(100% - 32px);
    border: 0;
    outline: none;
    padding: 0 7px;
    color: var(--primary);
    font-weight: 600;
    outline: none;
    text-decoration: none;
    text-transform: lowercase !important;
`

export const SearchButton = styled.button`
    margin: 0;
    width: 32px;
    height: 32px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: var(--primary);
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    transition: all ease .35s;

    &:hover {
        background-color: var(--primary);
        color: var(--white);
    }
`

export const Description = styled.p`
    margin: 0 0 33px 0;

    & a {
        color: var(--primary);
        font-weight: 600;
        text-decoration: none;
    }

    @media (max-width: 820px) {
        text-align: center;
    }
`

export const DeveloperBy = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 12px;
    color: var(--grey);

    & a {
        color: var(--primary);
        position: relative;
        top: 3px;
        font-size: 15px;
        margin-left: 2px;
    }
`

export const MessageError = styled.p`
    color: lightcoral;
    font-size: 12px;
    position: absolute;
    bottom: -34px;
    font-weight: 600;
`