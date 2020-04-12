import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MdSearch, MdFirstPage, MdNavigateBefore, MdNavigateNext, MdLastPage } from 'react-icons/md'

import Container from '../../components/Container/index'
import Menu from '../../components/Menu/index'

import { PokeInformation, PokeErrorBox, PokeError, PokeErrorText, PokeLoadingBox, PokeLoading, PokeLoadingText, PokeLogo, PokeCard, PokeForm, PokeSearchButton, PokeInput, PokeCatalog, PokeList, PokeListItem, PokeListItemImage, PokeListItemName, PokePagination, PokeNavigation, PokeNavigationButton, PokeNavigationHolder, PokeNavigationInformation, PokeNavigationInformationData } from './styles'

import logo from '../../assets/images/logo.png'
import pokeloading from '../../assets/images/loading-catalog.gif'
import pokeerror from '../../assets/images/error-response.gif'

import api from '../../services/api'

export default function Catalog() {

    const [errorResult, setErrorResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemons] = useState([])

    const pageNumber = '{pageNumber}'
    const pagesNumber = '{pagesNumber}'

    async function pokemonsResult() {
        setLoading(true)
        await api.get(`/api/v2/pokemon/`)
            .then(response => {
                listOfPokemons(response.data.count)
            })
            .catch(error => {
                setLoading(false)
                setErrorResult(true)
            })
    }

    async function listOfPokemons(number) {
        await api.get(`/api/v2/pokemon/?offset=0&limit=${number}`)
            .then(response => {
                let data = []
                data.push(response.data)
                setPokemons(data)
                setTimeout(
                    function() {
                        setLoading(false)
                        window['execjplist']()
                    }, 5000) 
            })
            .catch(error => {
                setLoading(false)
                setErrorResult(true)
            })
    }

    function checkImage(imageSrc) {
        var img = new Image();        
        try {
            img.src = imageSrc;
            return imageSrc;
        } catch(err) {
            return logo;
        }    
    }

    useEffect(() => {
        pokemonsResult()
    }, [])
   
    return (
        <Container style={errorResult ? {background: 'white'} : loading ? {background: '#cce6e3'} : null}>
            <PokeInformation>
                {
                    errorResult
                    ?
                        <PokeErrorBox>
                            <PokeError src={pokeerror} />
                            <PokeErrorText>Sorry, an error occurred</PokeErrorText>
                            <PokeErrorText>Please access or button below and search for another Pokémon</PokeErrorText>
                            <a href="/">Search New Pokémon</a>
                        </PokeErrorBox>
                    :
                        <>
                            {
                                loading
                                ?
                                    <PokeLoadingBox>
                                        <PokeLoading src={pokeloading} />
                                        <PokeLoadingText>Loading... Please Wait</PokeLoadingText>
                                    </PokeLoadingBox>
                                :
                                    <>
                                    <Menu />
                                    <PokeCard>
                                        <PokeLogo src={logo} alt="logo" />
                                        <p>Find the pokémon and see all its features</p>
                                        <PokeForm>
                                            <PokeSearchButton>
                                                <MdSearch />
                                            </PokeSearchButton>
                                            <PokeInput 
                                                type="text" 
                                                name="name"
                                                data-jplist-control="textbox-filter" 
                                                data-group="pokemoncatalog" 
                                                data-path=".pokemon" 
                                            />
                                        </PokeForm>
                                        <PokeCatalog>
                                            {
                                                pokemons.map((pokemon, i) => (
                                                    <PokeList key={i} data-jplist-group="pokemoncatalog">
                                                    {
                                                        pokemon.results.map((result, i) => (
                                                            <PokeListItem key={i} data-jplist-item>
                                                                <Link to={`/Pokemon/${result.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')}`}>
                                                                    {/* <PokeListItemImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')}.png`} alt={result.name} /> */}
                                                                    <PokeListItemImage src={checkImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')}.png`)} alt={result.name} />
                                                                    <PokeListItemName className="pokemon">{result.name}</PokeListItemName>
                                                                </Link>
                                                            </PokeListItem>
                                                        ))
                                                    }
                                                    </PokeList>
                                                ))
                                            }
                                            <PokePagination 
                                                data-jplist-control="pagination" 
                                                data-group="pokemoncatalog" 
                                                data-items-per-page="4" 
                                                data-current-page="0" 
                                                data-range = "4"
                                                data-name="pagination-pokecatalog"
                                            >
                                                <PokeNavigation>
                                                    <PokeNavigationButton data-type="first"><MdFirstPage /></PokeNavigationButton>
                                                    <PokeNavigationButton data-type="prev"><MdNavigateBefore /></PokeNavigationButton>

                                                    <PokeNavigationHolder data-type="pages">
                                                        <PokeNavigationButton data-type="page">{pageNumber}</PokeNavigationButton>
                                                    </PokeNavigationHolder>

                                                    <PokeNavigationButton data-type="next"><MdNavigateNext /></PokeNavigationButton>
                                                    <PokeNavigationButton data-type="last"><MdLastPage /></PokeNavigationButton>
                                                </PokeNavigation>
                                                <PokeNavigationInformation>
                                                    <PokeNavigationInformationData data-type="info">
                                                        Page {pageNumber} of <span>{pagesNumber}</span>
                                                    </PokeNavigationInformationData>
                                                </PokeNavigationInformation>
                                            </PokePagination>
                                        </PokeCatalog>
                                    </PokeCard>
                                    </>
                            }
                        </>
                }
            </PokeInformation>
        </Container>
    )
}