import styled from 'styled-components'

export const PokeInformation = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`

export const PokeLoadingBox = styled.div`
    text-align: center;

    @media (max-width: 820px) {
        background: #cce6e3;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const PokeLoading = styled.img`
    width: 350px;
`

export const PokeLoadingText = styled.p`
    margin: 0;
    color: var(--primary);
`

export const PokeErrorBox = styled.div`
    text-align: center;
    background: #fff;
    position: absolute;
    left: -20px;
    top: -20px;
    width: calc(100% + 42px);
    height: calc(100% + 47px);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    & a {
        width: fit-content;
        border: 1px solid;
        font-family: var(--font-secondary);
        text-decoration: none;
        background: var(--primary);
        color: var(--white);
        padding: 12px 14px 8px 14px;
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 100px;
        margin-top: 19px;
        transition: all ease .35s;
    }

    & a:hover {
        background-color: var(--white);
        color: var(--primary);
    }

    @media (max-width: 820px) {
        background: #ffffff;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const PokeError = styled.img`
    width: 350px;
`

export const PokeErrorText = styled.p`
    margin: 0;
    color: #302452;
`

export const PokeCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const PokeLogo = styled.img`
    width: 150px;
    height: auto;
`

export const PokeForm = styled.div`
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

    @media (max-width: 420px) {
        width: 100%;
        max-width: 290px;
    }
`


export const PokeInput = styled.input`
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

export const PokeSearchButton = styled.button`
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

export const PokeCatalog = styled.div`
    width: 100%;
`

export const PokeList = styled.ul`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 15px 0 10px 0;
    padding: 0;
`
export const PokeListItem = styled.li`
     & a {
        border: 1px solid lightgrey;
        width: 344px;
        padding: 2px 15px 2px 15px;
        display: flex;
        align-items: center;
        justify-content: end;
        text-decoration: none;
        color: var(--black);
        font-family: var(--font-secondary);
        border-radius: 100px;
        margin: 2px 0 2px 0;
        transition: all ease .35s;
     }

     & a:hover {
        background: var(--secundary);
     }

     & p {
        margin: 0;
        position: relative;
        top: 2px;
     }

     @media (max-width: 420px) {
        & a {
            width: 90%;
            max-width: 300px;
        }
     }
`

export const PokeListItemImage = styled.img`
    width: 25px;
`

export const PokeListItemName = styled.p`
    margin: 0;
    outline: none;
    text-decoration: none;
    font-family: var(--font-secondary);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
`

export const PokePagination = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`

export const PokeNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & .jplist-disabled, .jplist-disabled:hover {
        background: #818181 !important;
        color: #000 !important;
        cursor: none !important;
        border-color: #818181 !important;
    }

    & [data-type="first"], [data-type="prev"], [data-type="next"], [data-type="last"] {
        background-color: var(--primary);
        border-color: var(--primary);
        color: var(--white);
    }

    & [data-type="first"]:hover, [data-type="prev"]:hover, [data-type="next"]:hover, [data-type="last"]:hover {
        background-color: var(--white);
        border-color: var(--primary);
        color: var(--primary);
    }

    & [data-type="page"] {
        background: var(--blue);
        color: var(--white);
        border-color: var(--blue);
    }

    & [data-type="page"]:hover {
        background: var(--white);
        color: var(--blue);
        border-color: var(--blue);
    }
`

export const PokeNavigationButton = styled.button`
    width: 42px;
    height: 42px;
    padding: 0;
    margin: 0 5px;
    border: 2px solid;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease .35s;

    @media (max-width: 420px) {
        width: 30px;
        height: 30px;
    }
`

export const PokeNavigationHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 180px)
    & button {
        margin: 0 5px;
    }
`

export const PokeNavigationInformation = styled.div`
    margin-top: 15px;
`

export const PokeNavigationInformationData = styled.div`
    & span {
        color: var(--primary);
    }
`