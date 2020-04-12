import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { MdSearch } from 'react-icons/md'
import { GoMarkGithub } from "react-icons/go";

import Container from '../../components/Container/index'
import Menu from '../../components/Menu/index'
import { Logo, Form, Input, SearchButton, Description, DeveloperBy, MessageError } from './styles'

import logo from '../../assets/images/logo.png'

export default function Home() {

    const [search, setSearch] = useState()
    const [validation, setValidation] = useState(false)
    const history = useHistory()

    const handleSubmit = () => {
        if (search === undefined) {
            setValidation(true)
        } else {
            history.push(`/Pokemon/${search}`)
        }
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleSubmit()
        }
    }

    return (
        <Container>
            <Menu />
            <Logo src={logo} alt="Pokémon Catalog"/>
            <Description>Pokémon world information catalog based on <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PókeAPI</a></Description>
            <Form>
                <SearchButton onClick={handleSubmit}>
                    <MdSearch />
                </SearchButton>
                <Input 
                    type="text" 
                    name="name" 
                    onKeyPress={handleKeyDown}
                    onChange={(e) => setSearch(e.target.value) } 
                    placeholder="Enter the name of a Pokémon"
                />
                {
                    validation
                    ?
                        <MessageError>This field cannot be empty, please fill in</MessageError>
                    :
                        null
                }
            </Form>
            <DeveloperBy>Developed By Jadson A. Dorneles <a href="https://github.com/jadsondorneles" target="_blank" rel="noopener noreferrer"><GoMarkGithub /></a></DeveloperBy>
        </Container>
    )
}