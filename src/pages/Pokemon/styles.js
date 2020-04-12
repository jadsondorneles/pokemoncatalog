import styled from 'styled-components'

export const PokeInformation = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    width: 758px;
    height: 454px;

    @media (max-width: 820px) {
        position: relative;
        left: 0;
        top: 0;
        height: auto;
        width: 100%;
    }

`

export const PokeMenu = styled.div`
    @media (max-width: 420px) {
        position: fixed;
        top: -6px;
        width: 94px;
        height: 97px;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0px;
    }
`

export const PokeLoadingBox = styled.div`
    text-align: center;
    background: #c5b6f2;
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

    @media (max-width: 820px) {
        background: #c5b6f2;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0;
    }
`

export const PokeLoading = styled.img`
    width: 350px;

    @media (max-width: 420px) {
        width: 100%;
        height: auto;
    }
`

export const PokeLoadingText = styled.p`
    margin: 0;
    color: #302452;
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
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0;
    }
`

export const PokeError = styled.img`
    width: 350px;
`

export const PokeErrorText = styled.p`
    margin: 0;
    color: #302452;
`

export const PokeProfile = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 420px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 220px;
    }
`

export const PokeImage = styled.img`
    width: 100px;
`

export const PokeBasic = styled.div`
    display: grid;
    grid-template-areas: "PokeProfileInfo PokeProfileInfo" "PokeWeight PokeType";
    font-size: 30px;
    width: calc(100% - 100px);

    @media (max-width: 420px) {
        grid-template-areas: 
        "PokeProfileInfo PokeProfileInfo" 
        "PokeWeight PokeWeight"
        "PokeType PokeType";
        grid-gap: 15px;
    }
`

export const PokeProfileInfo = styled.div`
    grid-area: PokeProfileInfo;
`

export const PokeOrder = styled.p`
    font-family: var(--font-secondary);
    font-size: 35px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    letter-spacing: -2px;
`

export const PokeName = styled.p`
    font-family: var(--font-secondary);
    font-size: 35px;
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--grey);
    letter-spacing: -2px;

    @media (max-width: 420px) {
        font-size: 20px;
    }
`

export const PokeWeight =  styled.div`
    grid-area: PokeWeight;
    display: flex;
    flex-direction: column;
    font-size: 22px;
`

export const PokeWeightTitle =  styled.p`
    font-family: var(--font-secondary);
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    font-weight: 600;
    letter-spacing: -2px;
    font-size: 19px;
`

export const PokeWeightValue =  styled.p`
    font-family: var(--font-secondary);
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    letter-spacing: -2px;
    font-size: 18px;
    font-weight: 300;
`

export const PokeType =  styled.div`
    grid-area: PokeType;
    display: flex;
    flex-direction: column;
    font-size: 22px;
`

export const PokeTypeTitle =  styled.div`
    font-family: var(--font-secondary);
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    font-weight: 600;
    letter-spacing: -2px;
    font-size: 19px;
`
export const PokeTypeList = styled.div`
    display: inline-flex;
`

export const PokeTypeItem =  styled.div`
    font-family: var(--font-secondary);
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    font-weight: 300;
    letter-spacing: -2px;
    background-color: var(--blue);
    width: max-content;
    font-weight: 400;
    padding: 5px 10px 1px 10px;
    border-radius: 100px;
    color: var(--white);
    font-size: 14px;
    margin-right: 10px;
    font-weight: 300;
`

export const PokeTab = styled.div`
    /* border: 1px solid blue; */
    margin-top: 20px;
`

export const PokeAbility = styled.div`
    background: #dfe7e9;
    padding: 17px 16px;
    margin-bottom: 18px;
    border-radius: 10px;
`

export const PokeAbilityTitle = styled.p`
    font-family: var(--font-secondary);
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
`

export const PokeAbilityEffect = styled.p`
    font-family: var(--font-secondary);
    text-transform: capitalize;
    margin: 0;
`

export const PokeAbilityEffectEntries = styled.p`
    font-family: var(--font-secondary);
    text-transform: capitalize;
    margin: 0;
`

export const PokeAbilityEffectEntriesDetail = styled.p`
    margin: 0 0 10px 0;
`

export const PokeForm = styled.div`
    display: inline-flex;
`

export const PokeFormItem = styled.p`
    font-family: var(--font-secondary);
    margin: 0;
    text-transform: uppercase;
    color: var(--grey);
    font-weight: 300;
    letter-spacing: -2px;
    background-color: var(--black);
    width: max-content;
    font-weight: 400;
    padding: 5px 10px 1px 10px;
    border-radius: 100px;
    color: var(--white);
    font-size: 14px;
    margin-right: 10px;
    font-weight: 300;
`

export const PokeStat = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 820px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const PokeStatItem = styled.div`

`

export const PokeStatValues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PokeStatBase = styled.p`
    font-family: var(--font-secondary);
    margin: 0;
    font-size: 49px;
    margin-bottom: -16px;

    @media (max-width: 420px) {
        font-size: 15px;
    }

    @media (max-width: 820px) {
        font-size: 25px;
        margin-bottom: -5px;
    }
`

export const PokeStatName = styled.p`
    font-family: var(--font-secondary);
    margin: 0;
    font-size: 10px;
    text-transform: uppercase;


    @media (max-width: 420px) {
        font-size: 5px;
    }

    @media (max-width: 820px) {
        font-size: 7px;
    }
`

export const PokeEvolution = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;

    @media (max-width: 820px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const PokeEvolutionItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    border-radius: 100px;
    box-shadow: 0px 0px 16px -7px rgba(0,0,0,0.75);
    background-color: var(--blue);
`
export const PokeEvolutionContentImage = styled.div`
    background-color: var(--primary);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
        width: 45px;
        height: 45px;
    }
`

export const PokeEvolutionImage = styled.img`
    width: 50px;
    height: auto;

    @media (max-width: 820px) {
        width: 32px;
    }
`

export const PokeEvolutionName = styled.div`
    font-family: var(--font-secondary);
    color: var(--white);
    margin: 0;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 9px;
}
`