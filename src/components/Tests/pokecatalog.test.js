import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import Router from '../../routes'

describe('Tests for Pokémon Catalog', () => {
    it('validation of the elements', async () => {
        const { container, getByTestId } = render(
            <Router/>
        )

        const pokeLogo = getByTestId('pokeLogo')
        const pokeDescApplication = getByTestId('pokeDescription')
        const pokeInput = getByTestId('pokeInput')
        const pokeBtnSearch = getByTestId('pokeBtnSearch')
        const pokeDev = getByTestId('pokeDev')
        
        fireEvent.change(pokeInput, { target: { value: 'pikachu' } })
        fireEvent.click(pokeBtnSearch)
    })
})